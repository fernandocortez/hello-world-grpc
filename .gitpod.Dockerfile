FROM gitpod/workspace-full:latest
USER gitpod

# Setup Node environment
ENV NODE_VERSION=18.12.1

RUN bash -c 'VERSION="${NODE_VERSION}" \
  && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
  && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

# Install Envoy proxy
RUN sudo apt update \
  && sudo apt install -y apt-transport-https gnupg2 curl lsb-release \
  && curl -sL 'https://deb.dl.getenvoy.io/public/gpg.8115BA8E629CC074.key' | sudo gpg --dearmor -o /usr/share/keyrings/getenvoy-keyring.gpg \
  # Verify the keyring - this should yield "OK"
  && echo a077cb587a1b622e03aa4bf2f3689de14658a9497a9af2c427bba5f4cc3c4723 /usr/share/keyrings/getenvoy-keyring.gpg | sha256sum --check \
  && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/getenvoy-keyring.gpg] https://deb.dl.getenvoy.io/public/deb/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/getenvoy.list \
  && sudo apt update \
  && sudo apt install -y getenvoy-envoy

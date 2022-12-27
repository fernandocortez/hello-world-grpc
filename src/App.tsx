import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { trpc } from "./utils/trpc";
import "./App.css";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:5000",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/hello-world">Hello World</Link>
            </li>
            <li>
              <Link to="/echo-data">Echo Data</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;

// vite.config.js
import { defineConfig } from "file:///D:/Full-Stack/Certificates-dot-dev/24-article-comments-1/node_modules/vite/dist/node/index.js";

// public/data/index.js
import { faker } from "file:///D:/Full-Stack/Certificates-dot-dev/24-article-comments-1/node_modules/@faker-js/faker/dist/esm/index.mjs";
var comments = [
  {
    "avatar": "https://i.pravatar.cc/96?u=23300",
    "name": "AliceW",
    "content": "This article is fantastic! Service workers have always been a challenge for me, but your explanation is very clear. Thanks for sharing!"
  },
  {
    "avatar": "https://i.pravatar.cc/96?u=24455",
    "name": "TechGuru99",
    "content": "Finally found a detailed article on PWAs! Clear steps and rich examples, truly a great resource for learning."
  },
  {
    "avatar": "https://i.pravatar.cc/96?u=38899",
    "name": "DevDude",
    "content": "Very practical guide, especially the section on caching strategies. It solved many of my confusions. Looking forward to more content like this!"
  },
  {
    "avatar": "https://i.pravatar.cc/96?u=39999",
    "name": "CodeNinja",
    "content": "Well-written article, comprehensive content. Successfully created a PWA following your steps, and it works great!"
  },
  {
    "avatar": "https://i.pravatar.cc/96?u=12345",
    "name": "WebMaster",
    "content": "Great summary, especially the part about Web App Manifest, which I was always confused about. Thanks for the detailed explanation."
  }
];

// vite.config.js
function sleep(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
}
var vite_config_default = defineConfig({
  "test": {
    "environment": "jsdom",
    "include": ["tests/**/*.test.js"],
    "setupFiles": "./tests/setup.js"
  },
  "plugins": [
    {
      "name": "server",
      configureServer(server) {
        let _comments = comments;
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith("/comments/post")) {
            if (req.method !== "POST") {
              res.writeHead(405);
              res.write(JSON.stringify({ "error": { "message": "Method must be POST!" } }));
              res.end();
            }
            if (req.headers["content-type"] && req.headers["content-type"] !== "application/json") {
              res.writeHead(400);
              res.write(JSON.stringify({ "error": { "message": "Invalid or missing Content-Type" } }));
              res.end();
            }
            let body = "";
            req.on("data", async (chunk) => {
              body += chunk;
              body = JSON.stringify({
                ...JSON.parse(body),
                "avatar": "https://i.pravatar.cc/96?u=42854"
              });
              _comments.push(JSON.parse(body));
              await sleep(200);
              res.write(JSON.stringify({ "data": body }));
              res.end();
            });
          } else if (req.url?.startsWith("/comments")) {
            await sleep(200);
            res.write(JSON.stringify({ "data": comments }));
            res.end();
          } else {
            next();
          }
        });
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicHVibGljL2RhdGEvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGdWxsLVN0YWNrXFxcXENlcnRpZmljYXRlcy1kb3QtZGV2XFxcXDI0LWFydGljbGUtY29tbWVudHMtMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRnVsbC1TdGFja1xcXFxDZXJ0aWZpY2F0ZXMtZG90LWRldlxcXFwyNC1hcnRpY2xlLWNvbW1lbnRzLTFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Z1bGwtU3RhY2svQ2VydGlmaWNhdGVzLWRvdC1kZXYvMjQtYXJ0aWNsZS1jb21tZW50cy0xL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGNvbW1lbnRzIH0gZnJvbSAnLi9wdWJsaWMvZGF0YSdcblxuXG5mdW5jdGlvbiBzbGVlcCAobnVtYmVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgfSwgbnVtYmVyKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAndGVzdCc6IHtcbiAgICAnZW52aXJvbm1lbnQnOiAnanNkb20nLFxuICAgICdpbmNsdWRlJzogWyd0ZXN0cy8qKi8qLnRlc3QuanMnXSxcbiAgICAnc2V0dXBGaWxlcyc6ICcuL3Rlc3RzL3NldHVwLmpzJ1xuICB9LFxuICAncGx1Z2lucyc6IFtcbiAgICB7XG4gICAgICAnbmFtZSc6ICdzZXJ2ZXInLFxuICAgICAgY29uZmlndXJlU2VydmVyIChzZXJ2ZXIpIHtcbiAgICAgICAgbGV0IF9jb21tZW50cyA9IGNvbW1lbnRzXG4gICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcS51cmw/LnN0YXJ0c1dpdGgoJy9jb21tZW50cy9wb3N0JykpIHtcbiAgICAgICAgICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgcmVzLndyaXRlSGVhZCg0MDUpXG4gICAgICAgICAgICAgIHJlcy53cml0ZShKU09OLnN0cmluZ2lmeSh7ICdlcnJvcic6IHsgJ21lc3NhZ2UnOiAnTWV0aG9kIG11c3QgYmUgUE9TVCEnIH19KSlcbiAgICAgICAgICAgICAgcmVzLmVuZCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVyc1snY29udGVudC10eXBlJ10gJiYgcmVxLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddICE9PSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgICAgICAgICAgcmVzLndyaXRlSGVhZCg0MDApXG4gICAgICAgICAgICAgIHJlcy53cml0ZShKU09OLnN0cmluZ2lmeSh7ICdlcnJvcic6IHsgJ21lc3NhZ2UnOiAnSW52YWxpZCBvciBtaXNzaW5nIENvbnRlbnQtVHlwZScgfX0pKVxuICAgICAgICAgICAgICByZXMuZW5kKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGJvZHkgPSAnJ1xuICAgICAgICAgICAgcmVxLm9uKCdkYXRhJywgYXN5bmMgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgIGJvZHkgKz0gY2h1bmtcbiAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uSlNPTi5wYXJzZShib2R5KSxcbiAgICAgICAgICAgICAgICAnYXZhdGFyJzogJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy85Nj91PTQyODU0JyB9KVxuICAgICAgICAgICAgICBfY29tbWVudHMucHVzaChKU09OLnBhcnNlKGJvZHkpKVxuXG4gICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMClcbiAgICAgICAgICAgICAgcmVzLndyaXRlKEpTT04uc3RyaW5naWZ5KHsgJ2RhdGEnOiBib2R5IH0pKVxuICAgICAgICAgICAgICByZXMuZW5kKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXEudXJsPy5zdGFydHNXaXRoKCcvY29tbWVudHMnKSkge1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKVxuICAgICAgICAgICAgcmVzLndyaXRlKEpTT04uc3RyaW5naWZ5KHsgJ2RhdGEnOiBjb21tZW50cyB9KSlcbiAgICAgICAgICAgIHJlcy5lbmQoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGdWxsLVN0YWNrXFxcXENlcnRpZmljYXRlcy1kb3QtZGV2XFxcXDI0LWFydGljbGUtY29tbWVudHMtMVxcXFxwdWJsaWNcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRnVsbC1TdGFja1xcXFxDZXJ0aWZpY2F0ZXMtZG90LWRldlxcXFwyNC1hcnRpY2xlLWNvbW1lbnRzLTFcXFxccHVibGljXFxcXGRhdGFcXFxcaW5kZXguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Z1bGwtU3RhY2svQ2VydGlmaWNhdGVzLWRvdC1kZXYvMjQtYXJ0aWNsZS1jb21tZW50cy0xL3B1YmxpYy9kYXRhL2luZGV4LmpzXCI7aW1wb3J0IHsgZmFrZXIgfSBmcm9tICdAZmFrZXItanMvZmFrZXInXG5cblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRzID0gW1xuICB7XG4gICAgJ2F2YXRhcic6ICdodHRwczovL2kucHJhdmF0YXIuY2MvOTY/dT0yMzMwMCcsXG4gICAgJ25hbWUnOiAnQWxpY2VXJyxcbiAgICAnY29udGVudCc6ICdUaGlzIGFydGljbGUgaXMgZmFudGFzdGljISBTZXJ2aWNlIHdvcmtlcnMgaGF2ZSBhbHdheXMgYmVlbiBhIGNoYWxsZW5nZSBmb3IgbWUsIGJ1dCB5b3VyIGV4cGxhbmF0aW9uIGlzIHZlcnkgY2xlYXIuIFRoYW5rcyBmb3Igc2hhcmluZyEnXG4gIH0sXG4gIHtcbiAgICAnYXZhdGFyJzogJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy85Nj91PTI0NDU1JyxcbiAgICAnbmFtZSc6ICdUZWNoR3VydTk5JyxcbiAgICAnY29udGVudCc6ICdGaW5hbGx5IGZvdW5kIGEgZGV0YWlsZWQgYXJ0aWNsZSBvbiBQV0FzISBDbGVhciBzdGVwcyBhbmQgcmljaCBleGFtcGxlcywgdHJ1bHkgYSBncmVhdCByZXNvdXJjZSBmb3IgbGVhcm5pbmcuJ1xuICB9LFxuICB7XG4gICAgJ2F2YXRhcic6ICdodHRwczovL2kucHJhdmF0YXIuY2MvOTY/dT0zODg5OScsXG4gICAgJ25hbWUnOiAnRGV2RHVkZScsXG4gICAgJ2NvbnRlbnQnOiAnVmVyeSBwcmFjdGljYWwgZ3VpZGUsIGVzcGVjaWFsbHkgdGhlIHNlY3Rpb24gb24gY2FjaGluZyBzdHJhdGVnaWVzLiBJdCBzb2x2ZWQgbWFueSBvZiBteSBjb25mdXNpb25zLiBMb29raW5nIGZvcndhcmQgdG8gbW9yZSBjb250ZW50IGxpa2UgdGhpcyEnXG4gIH0sXG4gIHtcbiAgICAnYXZhdGFyJzogJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy85Nj91PTM5OTk5JyxcbiAgICAnbmFtZSc6ICdDb2RlTmluamEnLFxuICAgICdjb250ZW50JzogJ1dlbGwtd3JpdHRlbiBhcnRpY2xlLCBjb21wcmVoZW5zaXZlIGNvbnRlbnQuIFN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgUFdBIGZvbGxvd2luZyB5b3VyIHN0ZXBzLCBhbmQgaXQgd29ya3MgZ3JlYXQhJ1xuICB9LFxuICB7XG4gICAgJ2F2YXRhcic6ICdodHRwczovL2kucHJhdmF0YXIuY2MvOTY/dT0xMjM0NScsXG4gICAgJ25hbWUnOiAnV2ViTWFzdGVyJyxcbiAgICAnY29udGVudCc6ICdHcmVhdCBzdW1tYXJ5LCBlc3BlY2lhbGx5IHRoZSBwYXJ0IGFib3V0IFdlYiBBcHAgTWFuaWZlc3QsIHdoaWNoIEkgd2FzIGFsd2F5cyBjb25mdXNlZCBhYm91dC4gVGhhbmtzIGZvciB0aGUgZGV0YWlsZWQgZXhwbGFuYXRpb24uJ1xuICB9XG5dXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLFNBQVMsb0JBQW9COzs7QUNBRCxTQUFTLGFBQWE7QUFHN1ksSUFBTSxXQUFXO0FBQUEsRUFDdEI7QUFBQSxJQUNFLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFDRjs7O0FEekJBLFNBQVMsTUFBTyxRQUFRO0FBQ3RCLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBWTtBQUM5QixlQUFXLE1BQU07QUFDZixjQUFRO0FBQUEsSUFDVixHQUFHLE1BQU07QUFBQSxFQUNYLENBQUM7QUFDSDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLGVBQWU7QUFBQSxJQUNmLFdBQVcsQ0FBQyxvQkFBb0I7QUFBQSxJQUNoQyxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNUO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixnQkFBaUIsUUFBUTtBQUN2QixZQUFJLFlBQVk7QUFDaEIsZUFBTyxZQUFZLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUztBQUMvQyxjQUFJLElBQUksS0FBSyxXQUFXLGdCQUFnQixHQUFHO0FBQ3pDLGdCQUFJLElBQUksV0FBVyxRQUFRO0FBQ3pCLGtCQUFJLFVBQVUsR0FBRztBQUNqQixrQkFBSSxNQUFNLEtBQUssVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLHVCQUF1QixFQUFDLENBQUMsQ0FBQztBQUMzRSxrQkFBSSxJQUFJO0FBQUEsWUFDVjtBQUVBLGdCQUFJLElBQUksUUFBUSxjQUFjLEtBQUssSUFBSSxRQUFRLGNBQWMsTUFBTSxvQkFBb0I7QUFDckYsa0JBQUksVUFBVSxHQUFHO0FBQ2pCLGtCQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsa0NBQWtDLEVBQUMsQ0FBQyxDQUFDO0FBQ3RGLGtCQUFJLElBQUk7QUFBQSxZQUNWO0FBRUEsZ0JBQUksT0FBTztBQUNYLGdCQUFJLEdBQUcsUUFBUSxPQUFPLFVBQVU7QUFDOUIsc0JBQVE7QUFDUixxQkFBTyxLQUFLLFVBQVU7QUFBQSxnQkFBRSxHQUFHLEtBQUssTUFBTSxJQUFJO0FBQUEsZ0JBQ3hDLFVBQVU7QUFBQSxjQUFtQyxDQUFDO0FBQ2hELHdCQUFVLEtBQUssS0FBSyxNQUFNLElBQUksQ0FBQztBQUUvQixvQkFBTSxNQUFNLEdBQUc7QUFDZixrQkFBSSxNQUFNLEtBQUssVUFBVSxFQUFFLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDMUMsa0JBQUksSUFBSTtBQUFBLFlBQ1YsQ0FBQztBQUFBLFVBQ0gsV0FBVyxJQUFJLEtBQUssV0FBVyxXQUFXLEdBQUc7QUFDM0Msa0JBQU0sTUFBTSxHQUFHO0FBQ2YsZ0JBQUksTUFBTSxLQUFLLFVBQVUsRUFBRSxRQUFRLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLGdCQUFJLElBQUk7QUFBQSxVQUNWLE9BQU87QUFDTCxpQkFBSztBQUFBLFVBQ1A7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

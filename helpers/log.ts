export const logo = `
     ▓░          ▓▓   ▓▓                          
   ▓▓▓░               ▓▓                          
  ░▓▓▓░          ▓▓   ▓▓   ▓▓    ▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓ 
▒▓▓▓▓▓▓▓▓▓▓░▒    ▓▓   ▓▓  ▓▓    ▓▓     ▓▓  ▓▓▓    
      ░▓▓▓       ▓▓   ▓▓▓▓▓▓▓   ▓▓     ▓▓      ▓▓▓
      ░▓▓        ▓▓   ▓▓▓   ▓▓   ▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓ 
`;

export const line = `
------------------------⚡️-------------------------
`;

export function greeting() {
  console.log(logo);
  console.log(line);
}

export function success({ folderName }: { folderName: string }) {
  console.log(`\nInside that directory, you can run several commands:\n
\x1b[36mnpm run dev\x1b[0m
  Starts the development server.

\x1b[36mnpm run build\x1b[0m
  Bundles the app into static files for production.

We suggest that you begin by typing:

\x1b[36mcd ${folderName}
npm install\x1b[0m

Happy coding ⚡️`);
}

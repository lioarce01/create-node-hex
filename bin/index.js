#!/usr/bin/env node
import { platform } from "os";
import { fileURLToPath } from "url"; // Convertir URL a ruta de archivo
import { dirname, resolve } from "path";
import { execFile } from "child_process";

// Obtener el directorio del archivo actual
const __dirname = dirname(fileURLToPath(import.meta.url));

let binPath;
switch (platform()) {
    case "win32":
        binPath = resolve(__dirname, "create-node-hex.exe");
        break;
    case "darwin":
        binPath = resolve(__dirname, "create-node-hex-macos");
        break;
    case "linux":
        binPath = resolve(__dirname, "create-node-hex-linux");
        break;
    default:
        console.error("Unsupported OS");
        process.exit(1);
}

execFile(binPath, process.argv.slice(2), (error, stdout, stderr) =>
{
    if (error) {
        console.error(stderr);
        process.exit(1);
    }
    console.log(stdout);
});

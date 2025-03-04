#!/usr/bin/env node
import { platform } from "os";
import { join } from "path";
import { execFile } from "child_process";

let binPath;
switch (platform()) {
    case "win32":
        binPath = join(__dirname, "create-node-hex.exe");
        break;
    case "darwin":
        binPath = join(__dirname, "create-node-hex-macos");
        break;
    case "linux":
        binPath = join(__dirname, "create-node-hex-linux");
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

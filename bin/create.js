#!/usr/bin/env node

import simpleGit from "simple-git";
import { execa } from "execa";
import fs from "fs";
import path from "path";

const git = simpleGit();

const repoUrl = "https://github.com/lioarce01/node-boilerplate";
const projectName = process.argv[2] || "my-node-app";

async function createApp() {
  try {
    console.log(`Creating Node App ${repoUrl}...`);
    await git.clone(repoUrl, projectName);

    console.log("Node App created successfully");

    const projectPath = path.join(process.cwd(), projectName);

    // Eliminar la carpeta .git para desvincular el proyecto del repositorio original
    const gitDir = path.join(projectPath, ".git");
    if (fs.existsSync(gitDir)) {
      fs.rmSync(gitDir, { recursive: true, force: true });
      console.log(
        "Removed .git directory to unlink from the original repository"
      );
    }

    const isPnpmAvailable = await isPnpmInstalled();

    console.log("Installing Dependencies...");
    if (isPnpmAvailable) {
      await execa("pnpm", ["install"], { cwd: projectPath });
    } else {
      await execa("npm", ["install"], { cwd: projectPath });
    }

    console.log("Application created and dependencies installed successfully");
    console.log(`You can start to work on ${projectName}`);
    console.log(`Navigate to the project folder using:\n  cd ${projectName}`);
    console.log("You can initialize a new Git repository with:\n  git init");
  } catch (error) {
    console.error("Error creating the application:", error);
  }
}

async function isPnpmInstalled() {
  try {
    await execa("pnpm", ["--version"]);
    return true;
  } catch (error) {
    return false;
  }
}

createApp();

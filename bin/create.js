#!/usr/bin/env node

import simpleGit from "simple-git";
import { execa } from "execa";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const git = simpleGit();

const repoUrl = "https://github.com/lioarce01/node-boilerplate";
const projectName = process.argv[2] || "my-node-app";

async function createApp() {
  try {
    console.log(
      chalk.blueBright(`Creating Node App in "${projectName}" from template...`)
    );
    await git.clone(repoUrl, projectName);

    console.log(chalk.green("Node App cloned successfully"));

    const projectPath = path.join(process.cwd(), projectName);

    const gitDir = path.join(projectPath, ".git");
    if (fs.existsSync(gitDir)) {
      fs.rmSync(gitDir, { recursive: true, force: true });
      console.log(
        chalk.yellow(
          "Removed .git directory to unlink from the original repository"
        )
      );
    }

    const isPnpmAvailable = await isPnpmInstalled();

    console.log(chalk.blue("Installing Dependencies..."));
    if (isPnpmAvailable) {
      await execa("pnpm", ["install"], { cwd: projectPath });
    } else {
      await execa("npm", ["install"], { cwd: projectPath });
    }

    console.log(
      chalk.green(
        "Application created and dependencies installed successfully! 🎉"
      )
    );
    console.log(
      chalk.cyan(
        `To get started, navigate to your project directory:\n  cd ${projectName}`
      )
    );
    console.log(
      chalk.cyan("Then, initialize a new Git repository:\n  git init")
    );
    console.log(chalk.cyan("You can start working on your project now! 🚀"));
  } catch (error) {
    console.error(chalk.red("Error creating the application:"), error.message);
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

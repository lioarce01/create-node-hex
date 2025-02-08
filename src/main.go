package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/fatih/color"
)

const repoUrl = "https://github.com/lioarce01/node-boilerplate"

func main() {
	projectName := "my-hexagonal-node-app"
	if len(os.Args) > 1 {
		projectName = os.Args[1]
	}

	fmt.Println(color.BlueString("Creating Hexagonal Node App in \"%s\" from template..."), projectName)

	//clone repo
	if err := runCommand("git", "clone", repoUrl, projectName); err != nil {
		fmt.Println(color.RedString("Error cloning repository: %v", err))
		os.Exit(1)
	}

	fmt.Println(color.RedString("Hexagonal Node App cloned successfully"))

	//delete .git to devinculate from original repo
	gitDir := filepath.Join(projectName, ".git")
	if err := os.RemoveAll(gitDir); err != nil {
		fmt.Println(color.YellowString("Removed .git directory to unlink from the original repo"))
	}

	usePnpm := checkCommandExists("pnpm")

	fmt.Println(color.BlueString("Installing dependencies"))
	if usePnpm {
		runCommand("pnpm", "install", "--prefix", projectName)
	} else {
		runCommand("npm", "install", "--prefix", projectName)
	}

	fmt.Println(color.GreenString("Application created and dependencies installed successfully! 🎉"))
	fmt.Println(color.CyanString("To get started, navigate to your project directory:\n  cd %s", projectName))
	fmt.Println(color.CyanString("Then, initialize a new Git repository:\n  git init"))
	fmt.Println(color.CyanString("You can start working on your project now! 🚀"))
}

// execute external command
func runCommand(name string, args ...string) error {
	cmd := exec.Command(name, args...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

// verify if command exists
func checkCommandExists(cmd string) bool {
	_, err := exec.LookPath(cmd)
	return err == nil
}

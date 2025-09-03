interface User {
  id: string;
  username: string;
}
interface Repository {
  id: string;
  name: string;
}

interface Branch {
  id: string;
  name: string;
}

interface Commit {
  id: string;
  message: string;
}

function getUsers() {
  return new Promise<User[]>((resolve) => {
    console.log("Loading users...");

    setTimeout(() => {
      const users: User[] = [
        { id: "user-id-1", username: "arslonbekXX" },
        { id: "user-id-2", username: "john_doe" },
      ];

      resolve(users);
    }, 2000);
  });
}

function getRepositories() {
  return new Promise<Repository[]>((resolve) => {
    console.log("Loading repostories...");

    setTimeout(() => {
      const repositories: Repository[] = [
        { id: "repo-id-1", name: "pdp-10" },
        { id: "repo-id-2", name: "pdp-40" },
      ];

      resolve(repositories);
    }, 2000);
  });
}

function getBranches() {
  return new Promise<Branch[]>((resolve) => {
    console.log("Loading branches...");
    setTimeout(() => {
      const branches: Branch[] = [
        { id: "branch-id-1", name: "pdp-10" },
        { id: "branch-id-2", name: "pdp-40" },
      ];

      resolve(branches);
    }, 2000);
  });
}

function getCommits() {
  return new Promise<Commit[]>((resolve) => {
    console.log("Loading commits...");
    setTimeout(() => {
      const commits: Commit[] = [
        { id: "commit-id-1", message: "pdp-10" },
        { id: "commit-id-2", message: "pdp-40" },
      ];

      resolve(commits);
    }, 2000);
  });
}

getUsers().then((users) => {
  console.log("[USERS]", users);
  getRepositories().then((repository) => {
    console.log("[REPOSTORIES]", repository);
    getBranches().then((branch) => {
      console.log("[BRANCHES]", branch);
      getCommits().then((commit) => {
        console.log("[COMMITS]", commit);
      });
    });
  });
});

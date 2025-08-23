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

function getUsers(callback: (users: User[]) => void) {
  console.log("Loading users...");

  setTimeout(() => {
    const users: User[] = [
      { id: "user-id-1", username: "arslonbekXX" },
      { id: "user-id-2", username: "john_doe" },
    ];

    callback(users);
  }, 2000);
}

function getRepositories(
  username: string,
  callback: (repositories: Repository[]) => void
) {
  console.log("Repositories loading...");

  setTimeout(() => {
    // Backend was called (get repositories from database with username)
    const repositories: Repository[] = [
      { id: "repo-id-1", name: "pdp-10" },
      { id: "repo-id-2", name: "pdp-40" },
    ];

    callback(repositories);
  }, 2000);
}

function getBranches(username: string, callback: (branches: Branch[]) => void) {
  console.log("Branches loading...");
  setTimeout(() => {
    const branches: Branch[] = [
      { id: "branch-id-1", name: "pdp-21" },
      { id: "branch-id-2", name: "pdp-22" },
    ];
    callback(branches);
  }, 2000);
}
function getCommit(username: string, callback: (commits: Commit[]) => void) {
  console.log("Commits loading...");
  setTimeout(() => {
    const commits: Commit[] = [
      { id: "branch-id-1", message: "pdp-21" },
      { id: "branch-id-2", message: "pdp-22" },
    ];
    callback(commits);
  }, 2000);
}
getUsers((users) => {
  console.log("[USERS]", users);
  const user = users[0];

  getRepositories(user.username, (repositories) => {
    console.log("[REPOSITORIES]", repositories);

    getBranches(user.username, (branches) => {
      console.log("[REPOSITORIES]", branches);

      getCommit(user.username, (commits) => {
        console.log("[REPOSITORIES]", commits);
      });
    });
  });
});

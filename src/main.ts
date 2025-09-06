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
  console.log('Loading users...');

  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      const users: User[] = [
        { id: "user-id-1", username: "user1" },
        { id: "user-id-2", username: "user2" },
      ];

      resolve(users);
    }, 2000);
  });
}

function getRepositories(username: string) {
  return new Promise<Repository[]>((resolve) => {
    console.log(`Loading Repositories of ${username} ...`);

    setTimeout(() => {
      // Backend was called (get repositories from database with username)
      const repositories: Repository[] = [
        { id: "repo-id-1", name: "pdp-10" },
        { id: "repo-id-2", name: "pdp-40" },
      ];

      resolve(repositories);
    }, 2000);
  });
}

function getBranches(repoId: string) {
  return new Promise<Branch[]>((resolve) => {
    console.log(`Loading Branches of ${repoId} ...`);

    setTimeout(() => {
      // Backend was called (get branches from database with repoId)
      const branches: Branch[] = [
        { id: "branch-id-1", name: "main" },
        { id: "branch-id-2", name: "dev" },
      ];

      resolve(branches);
    }, 2000);
  });
}

function getCommits(branchId: string) {
  return new Promise<Commit[]>((resolve) => {
    console.log(`Loading Commits of ${branchId} ...`);

    setTimeout(() => {
      // Backend was called (get commits from database with branchId)
      const commits: Commit[] = [
        { id: "commit-id-1", message: "Initial commit" },
        { id: "commit-id-2", message: "Second commit" },
      ];

      resolve(commits);
    }, 2000);
  });
}

const usersFn = await getUsers();

console.log("USERS[]", usersFn);
const user = usersFn[0];

const repositoriesFn = await getRepositories(user.username);
console.log("REPOSITORIES[]", repositoriesFn);
const repository = repositoriesFn[0];

const branchesFn = await getBranches(repository.id);
console.log("BRANCHES[]", branchesFn);
const branch = branchesFn[0];

const commitsFn = await getCommits(branch.id);
console.log("Commits[]", commitsFn);

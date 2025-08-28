interface Company {
    name: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    company: Company;
}

let users: User[] = [];
let filteredUsers: User[] = [];
let editingUserId: number | null = null;
let deletingUserId: number | null = null;

async function loadUsers(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users = await response.json() as User[];
        filteredUsers = [...users];
        showTable();
    } catch (error) {
        const tableContainer = document.getElementById('tableContainer');
        if (tableContainer) {
            tableContainer.innerHTML =
                '<div class="p-8 text-center text-red-500">Xatolik yuz berdi!</div>';
        }
    }
}

function showTable(): void {
    const html = `
        <table class="w-full">
            <thead class="bg-gray-50">
                <tr>
                    <th class="p-3 text-left">ID</th>
                    <th class="p-3 text-left">Ism</th>
                    <th class="p-3 text-left">Email</th>
                    <th class="p-3 text-left">Telefon</th>
                    <th class="p-3 text-left">Kompaniya</th>
                    <th class="p-3 text-left">Amallar</th>
                </tr>
            </thead>
            <tbody>
                ${filteredUsers.map(user => `
                    <tr class="border-b hover:bg-gray-50">
                        <td class="p-3">${user.id}</td>
                        <td class="p-3 font-medium">${user.name}</td>
                        <td class="p-3 text-blue-600">${user.email}</td>
                        <td class="p-3">${user.phone}</td>
                        <td class="p-3">${user.company.name}</td>
                        <td class="p-3">
                            <button onclick="editUser(${user.id})" 
                                class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 mr-2">
                                Tahrirlash
                            </button>
                            <button onclick="deleteUser(${user.id})" 
                                class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                                O'chirish
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <div class="p-4 bg-gray-50 text-center text-sm text-gray-600">
            Jami: ${users.length} ta foydalanuvchi | Ko'rsatilgan: ${filteredUsers.length} ta
        </div>
    `;

    const tableContainer = document.getElementById('tableContainer');
    if (tableContainer) {
        tableContainer.innerHTML = html;
    }
}

function searchUsers(query: string): void {
    const searchTerm = query.toLowerCase();
    filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.company.name.toLowerCase().includes(searchTerm)
    );
    showTable();
}

function editUser(id: number): void {
    const user = users.find(u => u.id === id);
    if (!user) return;

    editingUserId = id;
    (document.getElementById('editId') as HTMLInputElement).value = user.id.toString();
    (document.getElementById('editName') as HTMLInputElement).value = user.name;
    (document.getElementById('editEmail') as HTMLInputElement).value = user.email;
    (document.getElementById('editPhone') as HTMLInputElement).value = user.phone;
    (document.getElementById('editCompany') as HTMLInputElement).value = user.company.name;

    const modal = document.getElementById('editModal');
    if (modal) modal.classList.remove('hidden');
}

function saveUser(): void {
    const id = parseInt((document.getElementById('editId') as HTMLInputElement).value);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex !== -1) {
        users[userIndex].name = (document.getElementById('editName') as HTMLInputElement).value;
        users[userIndex].email = (document.getElementById('editEmail') as HTMLInputElement).value;
        users[userIndex].phone = (document.getElementById('editPhone') as HTMLInputElement).value;
        users[userIndex].company.name = (document.getElementById('editCompany') as HTMLInputElement).value;

        const filteredIndex = filteredUsers.findIndex(u => u.id === id);
        if (filteredIndex !== -1) {
            filteredUsers[filteredIndex] = users[userIndex];
        }

        showTable();
        closeModal();
        alert("Ma'lumotlar saqlandi!");
    }
}

function deleteUser(id: number): void {
    const user = users.find(u => u.id === id);
    if (!user) return;

    deletingUserId = id;
    const deleteName = document.getElementById('deleteName');
    if (deleteName) deleteName.textContent = user.name;

    const modal = document.getElementById('deleteModal');
    if (modal) modal.classList.remove('hidden');
}

function confirmDelete(): void {
    if (deletingUserId === null) return;

    users = users.filter(u => u.id !== deletingUserId);
    filteredUsers = filteredUsers.filter(u => u.id !== deletingUserId);

    showTable();
    closeDeleteModal();
    alert("Foydalanuvchi o'chirildi!");
}

function closeModal(): void {
    const modal = document.getElementById('editModal');
    if (modal) modal.classList.add('hidden');
    editingUserId = null;
}

function closeDeleteModal(): void {
    const modal = document.getElementById('deleteModal');
    if (modal) modal.classList.add('hidden');
    deletingUserId = null;
}

document.addEventListener('DOMContentLoaded', () => {
    loadUsers();

    const searchInput = document.getElementById('search') as HTMLInputElement;
    if (searchInput) {
        searchInput.addEventListener('input', (e: Event) => {
            const target = e.target as HTMLInputElement;
            searchUsers(target.value);
        });
    }
});

(window as any).editUser = editUser;
(window as any).deleteUser = deleteUser;
(window as any).saveUser = saveUser;
(window as any).confirmDelete = confirmDelete;
(window as any).closeModal = closeModal;
(window as any).closeDeleteModal = closeDeleteModal;

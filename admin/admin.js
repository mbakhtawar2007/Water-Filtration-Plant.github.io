// Demo data for clients, orders, finance, and delivery logs
    // Add phone numbers to clients data
    const clients = [
    {id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+94 71 123 4567', status: 'Pending', nic: 'nic1.jpg', address: '123 Waterfront Dr, Colombo', location: '12.34, 45.67' },
    {id: 2, name: 'Michael Chen', email: 'michael@email.com', phone: '+94 72 234 5678', status: 'Active', nic: 'nic2.jpg', address: '456 Ocean Ave, Galle', location: '23.45, 56.78' },
    {id: 3, name: 'Amina Hassan', email: 'amina@email.com', phone: '+94 73 345 6789', status: 'Deactivated', nic: 'nic3.jpg', address: '789 River Rd, Kandy', location: '34.56, 67.89' },
    {id: 4, name: 'James Wilson', email: 'james@email.com', phone: '+94 74 456 7890', status: 'Active', nic: 'nic4.jpg', address: '101 Mountain View, Nuwara Eliya', location: '45.67, 78.90' },
    {id: 5, name: 'Emma Rodriguez', email: 'emma@email.com', phone: '+94 75 567 8901', status: 'Pending', nic: 'nic5.jpg', address: '202 Lake Side, Negombo', location: '56.78, 89.01' }
    ];

    const orders = [
    {id: 101, client: 'Sarah Johnson', date: '2025-06-25', status: 'Pending', bottles: 5, deliveryTime: '', payment: 'Pending' },
    {id: 102, client: 'Michael Chen', date: '2025-06-24', status: 'Dispatched', bottles: 10, deliveryTime: '10:30 AM', payment: 'Received' },
    {id: 103, client: 'Amina Hassan', date: '2025-06-23', status: 'Delivered', bottles: 7, deliveryTime: '2:00 PM', payment: 'Received' },
    {id: 104, client: 'James Wilson', date: '2025-06-27', status: 'Pending', bottles: 8, deliveryTime: '', payment: 'Pending' },
    {id: 105, client: 'Emma Rodriguez', date: '2025-06-26', status: 'Dispatched', bottles: 12, deliveryTime: '9:15 AM', payment: 'Received' }
    ];

    const finance = [
    {client: 'Sarah Johnson', total: 20, pending: 5, received: 15, paymentPending: 2 },
    {client: 'Michael Chen', total: 40, pending: 10, received: 30, paymentPending: 0 },
    {client: 'Amina Hassan', total: 15, pending: 0, received: 15, paymentPending: 0 },
    {client: 'James Wilson', total: 32, pending: 8, received: 24, paymentPending: 3 },
    {client: 'Emma Rodriguez', total: 28, pending: 12, received: 16, paymentPending: 4 }
    ];

    const deliveryLogs = [
    {client: 'Sarah Johnson', date: '2025-06-25', day: 'Wednesday', time: '11:00 AM', bottles: 5, address: '123 Waterfront Dr, Colombo', location: '12.34, 45.67' },
    {client: 'Michael Chen', date: '2025-06-24', day: 'Tuesday', time: '10:30 AM', bottles: 10, address: '456 Ocean Ave, Galle', location: '23.45, 56.78' },
    {client: 'Amina Hassan', date: '2025-06-23', day: 'Monday', time: '2:00 PM', bottles: 7, address: '789 River Rd, Kandy', location: '34.56, 67.89' },
    {client: 'James Wilson', date: '2025-06-27', day: 'Friday', time: '9:45 AM', bottles: 8, address: '101 Mountain View, Nuwara Eliya', location: '45.67, 78.90' },
    {client: 'Emma Rodriguez', date: '2025-06-26', day: 'Thursday', time: '11:20 AM', bottles: 12, address: '202 Lake Side, Negombo', location: '56.78, 89.01' }
    ];

    // DOM Elements
    const nicModal = document.getElementById('nicModal');
    const locationModal = document.getElementById('locationModal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const logoutBtn = document.getElementById('logoutBtn');

        // Navigation handling
        document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');

                // Scroll to section
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
        });

    // Modal functions
    function openModal(modal) {
        modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
        }

    function closeModal(modal) {
        modal.style.display = 'none';
    document.body.style.overflow = 'auto';
        }

        // Close modals when clicking close button
        closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            closeModal(this.closest('.modal'));
        });
        });

    // Close modals when clicking outside content
    window.addEventListener('click', function (e) {
            if (e.target.classList.contains('modal')) {
        closeModal(e.target);
            }
        });

    // Logout functionality
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
    if (confirm('Are you sure you want to logout?')) {
        // Redirect to main site index.html
        window.location.href = '../index.html';
            }
        });

    // Render functions
    function renderClients() {
        let html = `<table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>NIC</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>`;
    clients.forEach(c => {
        html += `<tr>
            <td>${c.name}</td>
            <td>${c.email}</td>
            <td>${c.phone}</td>
            <td><span class="status-badge status-${c.status.toLowerCase()}">${c.status}</span></td>
            <td><button class="btn-action btn-view" onclick="viewNIC('${c.nic}', '${c.name}')"><i class="fas fa-eye"></i> View</button></td>
            <td>
                <button class="btn-action btn-approve" onclick="updateClientStatus(${c.id}, 'Active')"><i class="fas fa-check"></i> Approve</button>
                <button class="btn-action btn-reject" onclick="updateClientStatus(${c.id}, 'Rejected')"><i class="fas fa-times"></i> Reject</button>
                <button class="btn-action btn-deactivate" onclick="updateClientStatus(${c.id}, 'Deactivated')"><i class="fas fa-ban"></i> Deactivate</button>
            </td>
        </tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('clientTableWrap').innerHTML = html;
        }

    function viewNIC(nic, name) {
        document.querySelector('#nicModal .modal-body p:first-child').innerHTML = `<strong>Client:</strong> ${name}`;
    openModal(nicModal);
        }

    function updateClientStatus(id, status) {
            const client = clients.find(c => c.id === id);
    if (client) {
        client.status = status;
    renderClients();
    alert(`Client ${client.name} status updated to ${status}`);
            }
        }

    function renderOrders() {
        let html = `<table class="table">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Client</th>
                <th>Date</th>
                <th>Status</th>
                <th>Bottles</th>
                <th>Delivery Time</th>
                <th>Payment</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>`;

            orders.forEach(o => {
                html += `<tr>
                    <td>${o.id}</td>
                    <td>${o.client}</td>
                    <td>${o.date}</td>
                    <td><span class="status-badge status-${o.status.toLowerCase()}">${o.status}</span></td>
                    <td>${o.bottles}</td>
                    <td>${o.deliveryTime || '-'}</td>
                    <td>${o.payment}</td>
                    <td>
                        <button class="btn-action btn-dispatch" onclick="updateOrderStatus(${o.id}, 'Dispatched')"><i class="fas fa-truck"></i> Dispatch</button>
                        <button class="btn-action btn-approve" onclick="updateOrderStatus(${o.id}, 'Delivered')"><i class="fas fa-check-circle"></i> Deliver</button>
                    </td>
                </tr>`;
            });

            html += `</tbody></table>`;
    document.getElementById('orderTableWrap').innerHTML = html;
        }

    function updateOrderStatus(id, status) {
            const order = orders.find(o => o.id === id);
    if (order) {
        order.status = status;
    if (status === 'Delivered') {
        order.deliveryTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                }
    renderOrders();
    alert(`Order #${id} status updated to ${status}`);
            }
        }

    function renderFinance() {
        let html = `<table class="table">
        <thead>
            <tr>
                <th>Client</th>
                <th>Total Bottles</th>
                <th>Bottles Pending</th>
                <th>Payments Pending</th>
                <th>Payments Received</th>
                <th>History</th>
            </tr>
        </thead>
        <tbody>`;
    finance.forEach(f => {
        const clientObj = clients.find(c => c.name === f.client);
        html += `<tr>
            <td>${f.client}</td>
            <td>${f.total}</td>
            <td>${f.pending}</td>
            <td>${f.paymentPending}</td>
            <td>${f.received}</td>
            <td><button class="btn-action btn-view" onclick="viewClientHistory(${clientObj ? clientObj.id : 0})"><i class="fas fa-history"></i> History</button></td>
        </tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('financeTableWrap').innerHTML = html;
        }

    function renderDeliveryLogs() {
        let html = `<table class="table">
        <thead>
            <tr>
                <th>Client</th>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
                <th>Bottles</th>
                <th>Address</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>`;

            deliveryLogs.forEach(d => {
                html += `<tr>
                    <td>${d.client}</td>
                    <td>${d.date}</td>
                    <td>${d.day}</td>
                    <td>${d.time}</td>
                    <td>${d.bottles}</td>
                    <td>${d.address}</td>
                    <td><button class="btn-action btn-view" onclick="viewLocation('${d.location}', '${d.client}', '${d.address}')"><i class="fas fa-map-marker-alt"></i> View</button></td>
                </tr>`;
            });

            html += `</tbody></table>`;
    document.getElementById('deliveryTableWrap').innerHTML = html;
        }

    function viewLocation(location, client, address) {
        document.querySelector('#locationModal .modal-body p:first-child').innerHTML = `<strong>Client:</strong> ${client}`;
    document.querySelector('#locationModal .modal-body p:nth-child(2)').innerHTML = `<strong>Address:</strong> ${address}`;
    document.querySelector('#locationModal .modal-body p:nth-child(3)').innerHTML = `<strong>Coordinates:</strong> ${location}`;
    openModal(locationModal);
        }

    // Modal for client history
let clientHistoryModal = document.getElementById('clientHistoryModal');
if (!clientHistoryModal) {
    clientHistoryModal = document.createElement('div');
    clientHistoryModal.className = 'modal';
    clientHistoryModal.id = 'clientHistoryModal';
    clientHistoryModal.innerHTML = `
        <div class="modal-content modal-body">
            <span class="close-modal" id="closeClientHistoryModal">&times;</span>
            <h3>Client History</h3>
            <div id="clientHistoryContent"></div>
        </div>
    `;
    document.body.appendChild(clientHistoryModal);
    document.getElementById('closeClientHistoryModal').onclick = function() {
        clientHistoryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}
function viewClientHistory(clientId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;
    let historyHtml = `<p><strong>Name:</strong> ${client.name}</p>
        <p><strong>Email:</strong> ${client.email}</p>
        <p><strong>Phone:</strong> ${client.phone}</p>
        <p><strong>Address:</strong> ${client.address}</p>
        <h4>Order History:</h4>`;
    const clientOrders = orders.filter(o => o.client === client.name);
    if (clientOrders.length === 0) {
        historyHtml += '<p>No orders found.</p>';
    } else {
        historyHtml += '<ul>';
        clientOrders.forEach(o => {
            historyHtml += `<li>Order #${o.id} - ${o.date} - ${o.status} - ${o.bottles} bottles - Payment: ${o.payment}</li>`;
        });
        historyHtml += '</ul>';
    }
    document.getElementById('clientHistoryContent').innerHTML = historyHtml;
    clientHistoryModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

    // Simulate real-time updates
    function simulateRealTimeUpdates() {
        setInterval(() => {
            // Add a new delivery log every 30 seconds
            const newLog = {
                ...deliveryLogs[Math.floor(Math.random() * deliveryLogs.length)],
                date: new Date().toISOString().split('T')[0],
                day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            deliveryLogs.unshift(newLog);
            if (deliveryLogs.length > 10) deliveryLogs.pop();
            renderDeliveryLogs();
        }, 30000);
        }

    // Initialize
    renderClients();
    renderOrders();
    renderFinance();
    renderDeliveryLogs();
    simulateRealTimeUpdates();

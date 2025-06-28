// Data Management
const data = {
    clients: [
        { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+94 71 123 4567', status: 'Pending', nic: 'nic1.jpg', address: '123 Waterfront Dr, Colombo', location: '12.34, 45.67', nicNumber: '123456789V' },
        { id: 2, name: 'Michael Chen', email: 'michael@email.com', phone: '+94 72 234 5678', status: 'Active', nic: 'nic2.jpg', address: '456 Ocean Ave, Galle', location: '23.45, 56.78', nicNumber: '234567890V' },
        { id: 3, name: 'Amina Hassan', email: 'amina@email.com', phone: '+94 73 345 6789', status: 'Deactivated', nic: 'nic3.jpg', address: '789 River Rd, Kandy', location: '34.56, 67.89', nicNumber: '345678901V' },
        { id: 4, name: 'James Wilson', email: 'james@email.com', phone: '+94 74 456 7890', status: 'Active', nic: 'nic4.jpg', address: '101 Mountain View, Nuwara Eliya', location: '45.67, 78.90', nicNumber: '456789012V' },
        { id: 5, name: 'Emma Rodriguez', email: 'emma@email.com', phone: '+94 75 567 8901', status: 'Pending', nic: 'nic5.jpg', address: '202 Lake Side, Negombo', location: '56.78, 89.01', nicNumber: '567890123V' }
    ],
    orders: [
        { id: 101, client: 'Sarah Johnson', date: '2025-06-25', status: 'Pending', bottles: 5, deliveryTime: '', payment: 'Pending' },
        { id: 102, client: 'Michael Chen', date: '2025-06-24', status: 'Dispatched', bottles: 10, deliveryTime: '10:30 AM', payment: 'Received' },
        { id: 103, client: 'Amina Hassan', date: '2025-06-23', status: 'Delivered', bottles: 7, deliveryTime: '2:00 PM', payment: 'Received' },
        { id: 104, client: 'James Wilson', date: '2025-06-27', status: 'Pending', bottles: 8, deliveryTime: '', payment: 'Pending' },
        { id: 105, client: 'Emma Rodriguez', date: '2025-06-26', status: 'Dispatched', bottles: 12, deliveryTime: '9:15 AM', payment: 'Received' }
    ],
    finance: [
        { client: 'Sarah Johnson', total: 20, pending: 5, received: 15, paymentPending: 2 },
        { client: 'Michael Chen', total: 40, pending: 10, received: 30, paymentPending: 0 },
        { client: 'Amina Hassan', total: 15, pending: 0, received: 15, paymentPending: 0 },
        { client: 'James Wilson', total: 32, pending: 8, received: 24, paymentPending: 3 },
        { client: 'Emma Rodriguez', total: 28, pending: 12, received: 16, paymentPending: 4 }
    ],
    deliveryLogs: [
        { client: 'Sarah Johnson', date: '2025-06-25', day: 'Wednesday', time: '11:00 AM', bottles: 5, address: '123 Waterfront Dr, Colombo', location: '12.34, 45.67' },
        { client: 'Michael Chen', date: '2025-06-24', day: 'Tuesday', time: '10:30 AM', bottles: 10, address: '456 Ocean Ave, Galle', location: '23.45, 56.78' },
        { client: 'Amina Hassan', date: '2025-06-23', day: 'Monday', time: '2:00 PM', bottles: 7, address: '789 River Rd, Kandy', location: '34.56, 67.89' },
        { client: 'James Wilson', date: '2025-06-27', day: 'Friday', time: '9:45 AM', bottles: 8, address: '101 Mountain View, Nuwara Eliya', location: '45.67, 78.90' },
        { client: 'Emma Rodriguez', date: '2025-06-26', day: 'Thursday', time: '11:20 AM', bottles: 12, address: '202 Lake Side, Negombo', location: '56.78, 89.01' }
    ]
};

// DOM Elements
const elements = {
    clientTableWrap: document.getElementById('clientTableWrap'),
    orderTableWrap: document.getElementById('orderTableWrap'),
    financeTableWrap: document.getElementById('financeTableWrap'),
    deliveryTableWrap: document.getElementById('deliveryTableWrap'),
    nicModal: document.getElementById('nicModal'),
    locationModal: document.getElementById('locationModal'),
    logoutBtn: document.getElementById('logoutBtn'),
    mobileToggle: document.querySelector('.admin-mobile-toggle'),
    navLinks: document.querySelector('.admin-nav-links'),
    adminHeader: document.querySelector('.admin-header'),
    clientName: document.getElementById('clientName'),
    nicNumber: document.getElementById('nicNumber'),
    locationClient: document.getElementById('locationClient'),
    deliveryAddress: document.getElementById('deliveryAddress'),
    coordinates: document.getElementById('coordinates')
};

// Render Functions
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

    data.clients.forEach(client => {
        // Disable buttons based on status
        const isActive = client.status === 'Active';
        const isPending = client.status === 'Pending';
        const isDeactivated = client.status === 'Deactivated';
        const isRejected = client.status === 'Rejected';
        html += `
            <tr>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td><span class="status-badge status-${client.status.toLowerCase()}">${client.status}</span></td>
                <td><button class="btn-action btn-view" data-action="view-nic" data-id="${client.id}"><i class="fas fa-eye"></i> View</button></td>
                <td class="action-buttons">
                    <button class="btn-action btn-approve" data-action="update-status" data-id="${client.id}" data-status="Active" ${isActive ? 'disabled' : ''}>Approve</button>
                    <button class="btn-action btn-reject" data-action="update-status" data-id="${client.id}" data-status="Rejected" ${isRejected ? 'disabled' : ''}>Reject</button>
                    <button class="btn-action btn-deactivate" data-action="update-status" data-id="${client.id}" data-status="Deactivated" ${isDeactivated ? 'disabled' : ''}>Deactivate</button>
                </td>
            </tr>`;
    });

    html += `</tbody></table>`;
    elements.clientTableWrap.innerHTML = html;
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

    data.orders.forEach(order => {
        const isDispatched = order.status === 'Dispatched';
        const isDelivered = order.status === 'Delivered';
        html += `
            <tr>
                <td>${order.id}</td>
                <td>${order.client}</td>
                <td>${order.date}</td>
                <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                <td>${order.bottles}</td>
                <td>${order.deliveryTime || '-'}</td>
                <td>${order.payment}</td>
                <td class="action-buttons">
                    <button class="btn-action btn-dispatch" data-action="update-order" data-id="${order.id}" data-status="Dispatched" ${isDispatched || isDelivered ? 'disabled' : ''}>Dispatch</button>
                    <button class="btn-action btn-approve" data-action="update-order" data-id="${order.id}" data-status="Delivered" ${isDelivered ? 'disabled' : ''}>Deliver</button>
                </td>
            </tr>`;
    });

    html += `</tbody></table>`;
    elements.orderTableWrap.innerHTML = html;
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

    data.finance.forEach(finance => {
        const client = data.clients.find(c => c.name === finance.client);
        html += `
            <tr>
                <td>${finance.client}</td>
                <td>${finance.total}</td>
                <td>${finance.pending}</td>
                <td>${finance.paymentPending}</td>
                <td>${finance.received}</td>
                <td><button class="btn-action btn-view" data-action="view-history" data-id="${client ? client.id : 0}"><i class="fas fa-history"></i> History</button></td>
            </tr>`;
    });

    html += `</tbody></table>`;
    elements.financeTableWrap.innerHTML = html;
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

    data.deliveryLogs.forEach(log => {
        html += `
            <tr>
                <td>${log.client}</td>
                <td>${log.date}</td>
                <td>${log.day}</td>
                <td>${log.time}</td>
                <td>${log.bottles}</td>
                <td>${log.address}</td>
                <td><button class="btn-action btn-view" data-action="view-location" data-client="${log.client}" data-address="${log.address}" data-location="${log.location}"><i class="fas fa-map-marker-alt"></i> View</button></td>
            </tr>`;
    });

    html += `</tbody></table>`;
    elements.deliveryTableWrap.innerHTML = html;
}

// Event Handlers
function handleTableClick(e) {
    const btn = e.target.closest('.btn-action');
    if (!btn) return;

    const action = btn.dataset.action;
    const id = parseInt(btn.dataset.id);

    switch (action) {
        case 'view-nic':
            viewNIC(id);
            break;
        case 'update-status':
            updateClientStatus(id, btn.dataset.status);
            break;
        case 'update-order':
            updateOrderStatus(id, btn.dataset.status);
            break;
        case 'view-location':
            viewLocation(
                btn.dataset.client,
                btn.dataset.address,
                btn.dataset.location
            );
            break;
        case 'view-history':
            viewClientHistory(id);
            break;
    }
}

function viewNIC(clientId) {
    const client = data.clients.find(c => c.id === clientId);
    if (!client) return;
    elements.clientName.textContent = client.name;
    elements.nicNumber.textContent = client.nicNumber;
    // Show NIC image if available
    let nicImg = document.getElementById('nicImage');
    if (!nicImg) {
        nicImg = document.createElement('img');
        nicImg.id = 'nicImage';
        nicImg.style.maxWidth = '100%';
        elements.nicNumber.parentNode.appendChild(nicImg);
    }
    nicImg.src = '../assets/' + client.nic;
    openModal(elements.nicModal);
}

function viewLocation(client, address, location) {
    elements.locationClient.textContent = client;
    elements.deliveryAddress.textContent = address;
    elements.coordinates.textContent = location;
    openModal(elements.locationModal);
}

function updateClientStatus(clientId, status) {
    const client = data.clients.find(c => c.id === clientId);
    if (client) {
        let confirmMsg = '';
        if (status === 'Deactivated') confirmMsg = 'Are you sure you want to deactivate this client?';
        if (status === 'Rejected') confirmMsg = 'Are you sure you want to reject this client?';
        if (status === 'Active') confirmMsg = 'Approve this client?';
        if (confirmMsg && !confirm(confirmMsg)) return;
        client.status = status;
        renderClients();
    }
}

function updateOrderStatus(orderId, status) {
    const order = data.orders.find(o => o.id === orderId);
    if (order) {
        let confirmMsg = '';
        if (status === 'Dispatched') confirmMsg = 'Dispatch this order?';
        if (status === 'Delivered') confirmMsg = 'Mark this order as delivered?';
        if (confirmMsg && !confirm(confirmMsg)) return;
        order.status = status;
        if (status === 'Delivered') {
            order.deliveryTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        renderOrders();
    }
}

function viewClientHistory(clientId) {
    const client = data.clients.find(c => c.id === clientId);
    if (!client) return;

    const clientOrders = data.orders.filter(o => o.client === client.name);
    let historyHtml = `
        <div class="client-history">
            <p><strong>Name:</strong> ${client.name}</p>
            <p><strong>Email:</strong> ${client.email}</p>
            <p><strong>Phone:</strong> ${client.phone}</p>
            <p><strong>Address:</strong> ${client.address}</p>
            <h4>Order History:</h4>
    `;

    if (clientOrders.length === 0) {
        historyHtml += '<p>No orders found for this client.</p>';
    } else {
        historyHtml += '<ul class="history-list">';
        clientOrders.forEach(order => {
            historyHtml += `
                <li>
                    <strong>Order #${order.id}</strong> - ${order.date}
                    <div>Status: <span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></div>
                    <div>Bottles: ${order.bottles}, Payment: ${order.payment}</div>
                </li>`;
        });
        historyHtml += '</ul>';
    }

    historyHtml += '</div>';

    // Create or update history modal
    let historyModal = document.getElementById('clientHistoryModal');
    if (!historyModal) {
        historyModal = document.createElement('div');
        historyModal.id = 'clientHistoryModal';
        historyModal.className = 'modal';
        historyModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Client History</h3>
                    <button class="close-modal" aria-label="Close modal">&times;</button>
                </div>
                <div class="modal-body" id="clientHistoryContent"></div>
            </div>
        `;
        document.body.appendChild(historyModal);

        historyModal.querySelector('.close-modal').addEventListener('click', () => {
            closeModal(historyModal);
        });
    }

    document.getElementById('clientHistoryContent').innerHTML = historyHtml;
    openModal(historyModal);
}

// Modal Functions
function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modal.setAttribute('aria-hidden', 'true');
}

// Navigation
function handleNavClick(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelectorAll('.admin-nav-links a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');

        // Scroll to section
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        if (window.innerWidth <= 1100) {
            elements.navLinks.classList.remove('open');
            elements.mobileToggle.classList.remove('open');
            elements.mobileToggle.setAttribute('aria-expanded', 'false');
        }
    }
}

// Initialize
function initDashboard() {
    renderClients();
    renderOrders();
    renderFinance();
    renderDeliveryLogs();

    // Event listeners
    document.addEventListener('click', function (e) {
        // Close modals when clicking outside content
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Table actions
    elements.clientTableWrap.addEventListener('click', handleTableClick);
    elements.orderTableWrap.addEventListener('click', handleTableClick);
    elements.financeTableWrap.addEventListener('click', handleTableClick);
    elements.deliveryTableWrap.addEventListener('click', handleTableClick);

    // Navigation
    elements.navLinks.addEventListener('click', handleNavClick);

    // Logout
    elements.logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = '../index.html';
        }
    });

    // Mobile menu toggle
    elements.mobileToggle.addEventListener('click', function () {
        const isOpen = elements.navLinks.classList.toggle('open');
        this.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen.toString());
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        elements.adminHeader.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Close modals with close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function () {
            closeModal(this.closest('.modal'));
        });
    });

    // Simulate real-time updates
    setInterval(() => {
        // Add a new delivery log every 30 seconds
        const randomLog = data.deliveryLogs[Math.floor(Math.random() * data.deliveryLogs.length)];
        const newLog = {
            ...randomLog,
            date: new Date().toISOString().split('T')[0],
            day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        data.deliveryLogs.unshift(newLog);
        if (data.deliveryLogs.length > 10) data.deliveryLogs.pop();
        renderDeliveryLogs();
    }, 30000);
}

// Start dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);

document.addEventListener('keydown', function(e) {
    // ESC to close any open modal
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex') closeModal(modal);
        });
    }
});
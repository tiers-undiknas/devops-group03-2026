// File ini sengaja dibuat tanpa unit test untuk simulasi SC-05
export const generateAuditReport = (orders) => {
    let report = [];
    if (!orders || orders.length === 0) {
        return "Tidak ada pesanan untuk dilaporkan.";
    }

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        if (order.status === 'completed') {
            report.push(`[SELESAI] Order ID: ${order.id}, Total: ${order.total_amount}`);
        } else if (order.status === 'pending') {
            report.push(`[TERTUNDA] Order ID: ${order.id}, Menunggu pembayaran.`);
        } else if (order.status === 'cancelled') {
            report.push(`[BATAL] Order ID: ${order.id}, Dibatalkan oleh sistem.`);
        } else if (order.status === 'failed') {
            report.push(`[GAGAL] Order ID: ${order.id}, Terjadi kesalahan.`);
        } else {
            report.push(`[UNKNOWN] Order ID: ${order.id}, Status tidak dikenali.`);
        }
    }

    return report.join('\n');
};

export const calculateAuditSummary = (orders) => {
    let completed = 0;
    let pending = 0;
    let failed = 0;

    orders.forEach(order => {
        switch (order.status) {
            case 'completed':
                completed++;
                break;
            case 'pending':
                pending++;
                break;
            case 'failed':
                failed++;
                break;
            default:
                break;
        }
    });

    return {
        totalOrders: orders.length,
        completed,
        pending,
        failed,
        successRate: orders.length > 0 ? (completed / orders.length) * 100 : 0
    };
};
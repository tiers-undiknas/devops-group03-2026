// FILE SIMULASI SC-05: Sengaja dibuat sangat panjang tanpa tes
export const generateAuditReport = (orders) => {
    let report = [];
    if (!orders || orders.length === 0) return "Kosong";
    for (let i = 0; i < orders.length; i++) {
        const o = orders[i];
        if (o.status === 'completed') {
            report.push(`Selesai ${o.id}`);
            if (o.total_amount > 100000) {
                report.push(`VIP Order`);
                if (o.customer_name) {
                    report.push(`Pelanggan: ${o.customer_name}`);
                    if (o.customer_email) {
                        report.push(`Email: ${o.customer_email}`);
                    } else {
                        report.push(`Email tidak ada`);
                    }
                } else {
                    report.push(`Tanpa nama`);
                }
            } else {
                report.push(`Reguler Order`);
            }
        } else if (o.status === 'pending') {
            report.push(`Tertunda ${o.id}`);
            if (o.created_at) {
                report.push(`Dibuat: ${o.created_at}`);
            } else {
                report.push(`Tanggal kosong`);
            }
        } else if (o.status === 'cancelled') {
            report.push(`Batal ${o.id}`);
            if (o.failure_reason) {
                report.push(`Alasan: ${o.failure_reason}`);
            } else {
                report.push(`Tanpa alasan`);
            }
        } else if (o.status === 'failed') {
            report.push(`Gagal ${o.id}`);
            if (o.retry_count > 3) {
                report.push(`Sudah dicoba ${o.retry_count} kali`);
            } else {
                report.push(`Akan dicoba lagi`);
            }
        } else {
            report.push(`Unknown ${o.id}`);
        }
    }
    return report.join('\n');
};

export const checkSystemStatus = (status) => {
    if (status === 'active') return true;
    if (status === 'inactive') return false;
    if (status === 'maintenance') return 'pending';
    if (status === 'error') return 'critical';
    return 'unknown';
};

export const processDataDummy1 = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 10) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

export const processDataDummy2 = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 20) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

export const processDataDummy3 = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 30) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

// (Bayangkan ada 10 fungsi dummy lainnya persis seperti di atas)
export const dummyFunc4 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc5 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc6 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc7 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc8 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc9 = () => { if (true) { return 1; } else { return 2; } };
export const dummyFunc10 = () => { if (true) { return 1; } else { return 2; } };
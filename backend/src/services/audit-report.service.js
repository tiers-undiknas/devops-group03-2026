// FILE SIMULASI SC-05 (Aman dari ESLint, tapi tidak ada tesnya)
export const generateAuditReport = (orders) => {
    let report = [];
    if (!orders || orders.length === 0) return "Kosong";
    for (let i = 0; i < orders.length; i++) {
        const o = orders[i];
        if (o.status === 'completed') {
            report.push(`Selesai ${o.id}`);
            if (o.total_amount > 100000) {
                report.push(`VIP Order`);
            } else {
                report.push(`Reguler Order`);
            }
        } else if (o.status === 'pending') {
            report.push(`Tertunda ${o.id}`);
        } else if (o.status === 'cancelled') {
            report.push(`Batal ${o.id}`);
        } else if (o.status === 'failed') {
            report.push(`Gagal ${o.id}`);
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

export const processDataA = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 10) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

export const processDataB = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 20) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

export const processDataC = (data) => {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 30) { res += data[i]; } else { res -= data[i]; }
    }
    return res;
};

export const dummyFunc1 = (a) => { return a > 1 ? a * 2 : a / 2; };
export const dummyFunc2 = (a) => { return a > 2 ? a * 3 : a / 3; };
export const dummyFunc3 = (a) => { return a > 3 ? a * 4 : a / 4; };
export const dummyFunc4 = (a) => { return a > 4 ? a * 5 : a / 5; };
export const dummyFunc5 = (a) => { return a > 5 ? a * 6 : a / 6; };
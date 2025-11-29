// 404.html 完整 JavaScript

// 1. 动态生成时间戳（基于第237次迭代）
(function() {
    // 2025年不是闰年，第237天 = 8月25日
    const date = new Date(2025, 7, 25); // 月份0-11，7=8月
    const time = '23:47:12';
    const timestamp = date.toISOString().slice(0, 10) + ' ' + time;

    // 更新页面显示
    document.getElementById('timestamp').textContent = 'Session terminated at ' + timestamp;
})();

// 2. 从后端API获取并显示计数器
async function showCount() {
    try {
        const res = await fetch('https://r0xjveni-api.vercel.app/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'get_count' })
        });

        const data = await res.json();
        document.getElementById('investigator-count').textContent = data.count || 0;
    } catch (err) {
        // 如果API失败，隐藏计数器
        document.getElementById('counter-info').style.display = 'none';
    }
}

// 页面加载时执行
showCount();
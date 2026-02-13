// 1. データを貯める配列を一番上に用意
let allSubmissions = [];

// 2. HTMLの読み込みが完了してから動かす
document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.querySelector('#contactModal form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // 入力値を取得
            const newEntry = {
                id: Date.now(),
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                date: new Date().toLocaleString()
            };

            // 配列に追加
            allSubmissions.push(newEntry);

            // コンソールで確認
            console.log("保存成功！現在の全データ:", allSubmissions);

            // フォームのリセット
            this.reset();

            // モーダルを閉じる
            const modalElement = document.getElementById('contactModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});
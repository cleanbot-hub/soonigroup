document.addEventListener('DOMContentLoaded', function() {
    const link = 'https://open.kakao.com/o/sS4m0kqg';
    const popupContent = `
        <p>카카오톡 1:1 문의</p>
        <button onclick="copyToClipboard()">링크 복사하기</button>
        <button onclick="window.location.href='${link}'">링크 접속하기</button>
    `;

    const popupDiv = document.createElement('div');
    popupDiv.innerHTML = popupContent;
    popupDiv.style.position = 'fixed';
    popupDiv.style.top = '50%';
    popupDiv.style.left = '50%';
    popupDiv.style.transform = 'translate(-50%, -50%)';
    popupDiv.style.backgroundColor = 'white';
    popupDiv.style.padding = '150px';
    popupDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    document.body.appendChild(popupDiv);

    window.copyToClipboard = function() {
        navigator.clipboard.writeText(link).then(() => {
            alert('링크가 클립보드에 복사되었습니다.');
        }).catch(err => {
            alert('클립보드 복사에 실패했습니다: ' + err);
        });
    }
});

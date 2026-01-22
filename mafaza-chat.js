/**
 * MAFAZA AI WIDGET v5.6 (Backend Mode: cloudflare)
 * Backend URL: https://withered-leaf-4778.abdul-m4lik1999.workers.dev/
 */
(function() {
    // KONFIGURASI FRONTEND
    const MFZ_CONFIG = {
        apiUrl: "https://withered-leaf-4778.abdul-m4lik1999.workers.dev/", 
        waLink: "https://wa.me/6285161141114?text=Halo%20Admin%2C%20saya%20butuh%20bantuan%20lanjut..."
    };

    // INJECT CSS
    const style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
    :root { --mfz-primary: #2563eb; --mfz-bg: #F8FAFC; --mfz-text: #0F172A; }
    @keyframes mfzFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .mfz-widget-btn { position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background: var(--mfz-primary); border-radius: 50%; box-shadow: 0 4px 14px rgba(0,0,0,0.25); cursor: pointer; z-index: 9999; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; }
    .mfz-widget-btn:hover { transform: scale(1.1); }
    .mfz-widget-btn svg { width: 30px; height: 30px; fill: white; }
    .mfz-chat-box { position: fixed; bottom: 90px; right: 20px; width: 350px; height: 500px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); display: none; flex-direction: column; overflow: hidden; z-index: 9999; font-family: 'Inter', sans-serif; }
    .mfz-chat-box.active { display: flex; animation: mfzFadeIn 0.3s ease forwards; }
    .mfz-header { background: var(--mfz-primary); padding: 16px; color: white; display: flex; align-items: center; justify-content: space-between; }
    .mfz-profile { display: flex; align-items: center; gap: 10px; }
    .mfz-profile img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3); background: white; object-fit: cover; }
    .mfz-profile h3 { margin: 0; font-size: 16px; font-weight: 600; }
    .mfz-profile span { font-size: 11px; opacity: 0.9; display: block; }
    .mfz-body { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
    .mfz-msg { max-width: 80%; padding: 10px 14px; font-size: 14px; line-height: 1.5; word-wrap: break-word; position: relative; padding-bottom: 20px; }
    .mfz-bot { align-self: flex-start; background: white; color: var(--mfz-text); border-radius: 12px 12px 12px 2px; border: 1px solid #E2E8F0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
    .mfz-user { align-self: flex-end; background: var(--mfz-primary); color: white; border-radius: 12px 12px 2px 12px; }
    .mfz-time { font-size: 10px; position: absolute; bottom: 4px; right: 10px; opacity: 0.6; }
    .mfz-footer { padding: 12px; background: rgba(255,255,255,0.95); border-top: 1px solid #E2E8F0; display: flex; gap: 8px; }
    .mfz-input { flex: 1; border: 1px solid #CBD5E1; padding: 10px 15px; border-radius: 20px; outline: none; font-size: 14px; background: white; color: #0F172A; }
    .mfz-input:focus { border-color: var(--mfz-primary); }
    .mfz-send { background: var(--mfz-primary); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }
    .mfz-typing { font-size: 12px; color: #64748B; margin-left: 10px; display: none; margin-bottom: 5px; }
    .mfz-actions { display: flex; gap: 8px; } .mfz-icon-btn { background: rgba(255,255,255,0.2); border: none; cursor: pointer; color: white; padding: 5px; border-radius: 6px; }
    .mfz-power { text-align: center; font-size: 10px; color: #94a3b8; padding-bottom: 8px; background: rgba(255,255,255,0.9); }
    @media (max-width: 480px) { .mfz-chat-box { width: 90%; right: 5%; bottom: 80px; height: 60vh; } }
    `;
    document.head.appendChild(style);

    // INJECT UI
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = `
        <div class="mfz-widget-btn" id="mfzTrigger"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></div>
        <div class="mfz-chat-box" id="mafazaChatBox">
            <div class="mfz-header">
                <div class="mfz-profile"><img src="https://www.shutterstock.com/image-vector/robot-icon-chatbot-cute-smiling-600nw-715418284.jpg" alt="Logo"><div><h3>CS mafaza pro</h3><span>Online • AI Assistant</span></div></div>
                <div class="mfz-actions">
                    ${MFZ_CONFIG.waLink ? '<a href="' + MFZ_CONFIG.waLink + '" target="_blank" class="mfz-icon-btn" title="Chat WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.099-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg></a>' : ''}
                    <button id="mfzClose" class="mfz-icon-btn">✕</button>
                </div>
            </div>
            <div class="mfz-body" id="mfzBody"><div class="mfz-msg mfz-bot">Halo! Selamat datang di Mafaza Pro. Boleh kenalan dulu, dengan Kakak siapa ya?</div></div>
            <div class="mfz-typing" id="mfzTyping">Sedang mengetik...</div>
            <div class="mfz-footer">
                <input type="text" id="mfzInput" class="mfz-input" placeholder="Ketik pesan...">
                <button id="mfzSend" class="mfz-send"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg></button>
            </div>
            <div class="mfz-power">Powered by <a href="https://wa.me/6285161141114" target="_blank">MalikFaza</a></div>
        </div>
    `;
    document.body.appendChild(widgetContainer);

    // LOGIC
    const box = document.getElementById('mafazaChatBox');
    const inp = document.getElementById('mfzInput');
    
    document.getElementById('mfzTrigger').addEventListener('click', () => {
        if(box.style.display==='flex'){box.classList.remove('active');setTimeout(()=>box.style.display='none',300);}
        else{box.style.display='flex';setTimeout(()=>box.classList.add('active'),10);}
    });
    
    document.getElementById('mfzClose').addEventListener('click', () => {
        box.classList.remove('active');setTimeout(()=>box.style.display='none',300);
    });

    document.getElementById('mfzSend').addEventListener('click', sendMessage);
    inp.addEventListener('keypress', (e) => { if(e.key==='Enter') sendMessage(); });

    function appendMsg(txt, sender) {
        const d=document.createElement('div'); d.className=`mfz-msg mfz-${sender}`;
        d.innerHTML=`${txt.replace(/\*\*(.*?)\*\*/g,'<b>$1</b>')} <span class="mfz-time">${new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>`;
        document.getElementById('mfzBody').appendChild(d);
        document.getElementById('mfzBody').scrollTop=document.getElementById('mfzBody').scrollHeight;
    }

    async function sendMessage() {
        const txt=inp.value.trim(); if(!txt)return;
        appendMsg(txt,'user'); inp.value=''; document.getElementById('mfzTyping').style.display='block';
        
        try {
            // KIRIM KE BACKEND (PHP / CLOUDFLARE)
            const res = await fetch(MFZ_CONFIG.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: txt })
            });

            const data = await res.json();
            
            document.getElementById('mfzTyping').style.display='none';
            
            if (data.error) {
                appendMsg("⚠️ " + data.error, 'bot');
            } else {
                appendMsg(data.reply, 'bot');
            }
        } catch(e) {
            document.getElementById('mfzTyping').style.display='none';
            appendMsg("Maaf, gagal terhubung ke server. Cek koneksi Anda.", 'bot');
        }
    }
})();

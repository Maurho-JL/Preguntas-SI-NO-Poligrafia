
const questions=[{"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿Estuviste involucrado en tráfico ilegal de armas?", "a": "NO", "e": "Porque nunca lo estuviste."}, {"q": "¿Podrías afirmar que jamás aceptaste un soborno?", "a": "SÍ", "e": "Porque nunca aceptaste uno."}, {"q": "¿Dirías que nunca has probado drogas recientemente?", "a": "SÍ", "e": "Porque efectivamente no lo has hecho."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Podrías afirmar que jamás aceptaste un soborno?", "a": "SÍ", "e": "Porque nunca aceptaste uno."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿No negarías haber comerciado armas?", "a": "NO", "e": "Porque sí lo negarías: no lo hiciste."}, {"q": "¿Estuviste involucrado en tráfico ilegal de armas?", "a": "NO", "e": "Porque nunca lo estuviste."}, {"q": "¿Alguna vez aceptaste un soborno?", "a": "NO", "e": "Porque nunca lo hiciste."}, {"q": "¿No puedes negar que probaste drogas?", "a": "NO", "e": "Porque sí puedes negarlo: no las probaste."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Dirías que nunca has probado drogas recientemente?", "a": "SÍ", "e": "Porque efectivamente no lo has hecho."}, {"q": "¿Fuiste parte de algún grupo criminal?", "a": "NO", "e": "Porque nunca fuiste parte de uno."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Alguna vez aceptaste un soborno?", "a": "NO", "e": "Porque nunca lo hiciste."}, {"q": "¿Fuiste parte de algún grupo criminal?", "a": "NO", "e": "Porque nunca fuiste parte de uno."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Es verdad que jamás tuviste relación con armas ilegales?", "a": "SÍ", "e": "Porque es cierto."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Fuiste parte de algún grupo criminal?", "a": "NO", "e": "Porque nunca fuiste parte de uno."}, {"q": "¿Dirías que nunca has probado drogas recientemente?", "a": "SÍ", "e": "Porque efectivamente no lo has hecho."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿Es verdad que jamás tuviste relación con armas ilegales?", "a": "SÍ", "e": "Porque es cierto."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿No negarías haber comerciado armas?", "a": "NO", "e": "Porque sí lo negarías: no lo hiciste."}, {"q": "¿No es verdad que ofreciste dinero por tu lugar?", "a": "SÍ", "e": "Porque no lo ofreciste."}, {"q": "¿Estuviste involucrado en tráfico ilegal de armas?", "a": "NO", "e": "Porque nunca lo estuviste."}, {"q": "¿Alguna vez aceptaste un soborno?", "a": "NO", "e": "Porque nunca lo hiciste."}, {"q": "¿Es verdad que jamás tuviste relación con armas ilegales?", "a": "SÍ", "e": "Porque es cierto."}, {"q": "¿Pagaste por entrar a la academia?", "a": "NO", "e": "Porque no pagaste."}, {"q": "¿No es verdad que ofreciste dinero por tu lugar?", "a": "SÍ", "e": "Porque no lo ofreciste."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿Alguna vez aceptaste un soborno?", "a": "NO", "e": "Porque nunca lo hiciste."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Podrías afirmar que jamás aceptaste un soborno?", "a": "SÍ", "e": "Porque nunca aceptaste uno."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿No es verdad que ofreciste dinero por tu lugar?", "a": "SÍ", "e": "Porque no lo ofreciste."}, {"q": "¿Estuviste involucrado en tráfico ilegal de armas?", "a": "NO", "e": "Porque nunca lo estuviste."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Podrías afirmar que jamás aceptaste un soborno?", "a": "SÍ", "e": "Porque nunca aceptaste uno."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Dirías que nunca has probado drogas recientemente?", "a": "SÍ", "e": "Porque efectivamente no lo has hecho."}, {"q": "¿No negarías haber comerciado armas?", "a": "NO", "e": "Porque sí lo negarías: no lo hiciste."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿Alguna vez aceptaste un soborno?", "a": "NO", "e": "Porque nunca lo hiciste."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿Es falso afirmar que colaboraste con delincuentes?", "a": "SÍ", "e": "Porque no lo hiciste."}, {"q": "¿Alguien mentiría si dijera que tuviste contacto con armas ilegales?", "a": "SÍ", "e": "Porque no tuviste contacto con armas ilegales."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿Podrías afirmar que jamás aceptaste un soborno?", "a": "SÍ", "e": "Porque nunca aceptaste uno."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿Alguien mentiría si dijera que tuviste contacto con armas ilegales?", "a": "SÍ", "e": "Porque no tuviste contacto con armas ilegales."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿Es verdad que jamás tuviste relación con armas ilegales?", "a": "SÍ", "e": "Porque es cierto."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Puedes asegurar que entraste sin pagar a la academia?", "a": "SÍ", "e": "Porque entraste por méritos."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿No sería falso decir que sobornaste a alguien?", "a": "NO", "e": "Porque sí sería falso: no sobornaste a nadie."}, {"q": "¿Has consumido drogas en los últimos seis meses?", "a": "NO", "e": "Porque no has consumido drogas."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Es falso que consumiste sustancias prohibidas este año?", "a": "SÍ", "e": "Porque es mentira que las consumiste."}, {"q": "¿Es falso afirmar que colaboraste con delincuentes?", "a": "SÍ", "e": "Porque no lo hiciste."}, {"q": "¿Alguien mentiría si dijera que tuviste contacto con armas ilegales?", "a": "SÍ", "e": "Porque no tuviste contacto con armas ilegales."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿No negarías haber comerciado armas?", "a": "NO", "e": "Porque sí lo negarías: no lo hiciste."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿Es verdad que jamás tuviste relación con armas ilegales?", "a": "SÍ", "e": "Porque es cierto."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿No dirías que tuviste vínculos con bandas criminales?", "a": "SÍ", "e": "Porque no los tuviste."}, {"q": "¿Es cierto que nunca diste dinero para obtener tu puesto?", "a": "SÍ", "e": "Porque nunca lo hiciste."}, {"q": "¿Puedes decir que jamás estuviste en un grupo delictivo?", "a": "SÍ", "e": "Porque nunca lo estuviste."}, {"q": "¿Aceptarías dinero por hacer algo indebido?", "a": "NO", "e": "Porque no aceptarías sobornos."}, {"q": "¿Pagaste por entrar a la academia?", "a": "NO", "e": "Porque no pagaste."}, {"q": "¿No negarías haber comerciado armas?", "a": "NO", "e": "Porque sí lo negarías: no lo hiciste."}, {"q": "¿Alguien mentiría si dijera que tuviste contacto con armas ilegales?", "a": "SÍ", "e": "Porque no tuviste contacto con armas ilegales."}, {"q": "¿Pagaste por entrar a la academia?", "a": "NO", "e": "Porque no pagaste."}];
questions.sort(()=>Math.random()-0.5);
let current=0,correct=0,incorrect=0,unanswered=0,time=5,timer,res=[],quizStarted=false,isPaused=false;
const q=document.getElementById('questionText');
const prog=document.getElementById('progressText');
const pb=document.getElementById('progressBar');
function loadQ(){
 if(current>=questions.length)return finish();
 let x=questions[current];
 q.textContent=x.q;
 prog.textContent=`Pregunta ${current+1} de ${questions.length}`;
 pb.style.width=((current)/questions.length*100)+'%';
 time=5;document.getElementById('timer').textContent=time;
 clearInterval(timer);
 
 // Forzar parpadeo en toda la pantalla del quiz
 const qContainer=document.getElementById('quiz-container');
 qContainer.classList.remove('blink-full');
 void qContainer.offsetWidth; // Forzar reflow
 qContainer.classList.add('blink-full');
 
 timer=setInterval(()=>{time--;document.getElementById('timer').textContent=time;
 if(time<=0){clearInterval(timer);res.push([x.q,'Sin responder',x.a,'⏰',x.e]);unanswered++;current++;loadQ();}
 },1000);
}
function answer(v){
 let x=questions[current];
 clearInterval(timer);
 if(v===x.a){correct++;res.push([x.q,v,x.a,'✅',x.e]);}
 else{incorrect++;res.push([x.q,v,x.a,'❌',x.e]);}
 current++;loadQ();
}
function startQuiz(){
 document.getElementById('start-container').classList.add('hidden');
 document.getElementById('quiz-container').classList.remove('hidden');
 quizStarted=true;
 loadQ();
}
document.getElementById('btnStart').onclick=startQuiz;
document.getElementById('btnSi').onclick=()=>answer('SÍ');
document.getElementById('btnNo').onclick=()=>answer('NO');
document.getElementById('btnPause').onclick=()=>{
 isPaused=!isPaused;
 const btn=document.getElementById('btnPause');
 const btnSi=document.getElementById('btnSi');
 const btnNo=document.getElementById('btnNo');
 if(isPaused){
  clearInterval(timer);
  btn.textContent='Reanudar';
  btn.classList.add('resumed');
  btnSi.disabled=true;
  btnNo.disabled=true;
  btnSi.style.opacity='0.5';
  btnNo.style.opacity='0.5';
  btnSi.style.pointerEvents='none';
  btnNo.style.pointerEvents='none';
 }else{
  btn.textContent='Pausar';
  btn.classList.remove('resumed');
  btnSi.disabled=false;
  btnNo.disabled=false;
  btnSi.style.opacity='1';
  btnNo.style.opacity='1';
  btnSi.style.pointerEvents='auto';
  btnNo.style.pointerEvents='auto';
  timer=setInterval(()=>{time--;document.getElementById('timer').textContent=time;
   if(time<=0){clearInterval(timer);res.push([questions[current].q,'Sin responder',questions[current].a,'⏰',questions[current].e]);unanswered++;current++;loadQ();}
  },1000);
 }
};
document.getElementById('btnFinalize').onclick=()=>{
 if(confirm('¿Deseas finalizar la prueba ahora?')){
  clearInterval(timer);
  finish();
 }
};
function finish(){
 document.getElementById('quiz-container').classList.add('hidden');
 document.getElementById('result-container').classList.remove('hidden');
 document.getElementById('correctas').textContent=correct;
 document.getElementById('incorrectas').textContent=incorrect;
 document.getElementById('sinResponder').textContent=unanswered;
 let percentage=Math.round(correct/questions.length*100);
 document.getElementById('porcentaje').textContent=percentage+'%';
 let b=document.getElementById('summaryBody');
 res.forEach((r,i)=>b.innerHTML+=`<tr><td>${i+1}</td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`);
}
document.getElementById('reiniciar').onclick=()=>location.reload();


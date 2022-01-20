var glide = new Glide('.glide', {
   type: 'carousel', 
   startAt: 0,
   perView: 2
}).mount();
document.getElementById('back').addEventListener('click', () => {
   glide.go('<');
});
document.getElementById('next').addEventListener('click', () => {
   glide.go('>');
})
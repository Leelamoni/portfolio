document.getElementById('queryform')
addEventListener('submit', function(event) {
    event.preventDefault();
    const name=document.getElementById('name').value;

    const adrs=document.getElementById('adrs').value;
    if(!name || !adrs) {
        alert('please fill in all fields.');
        return;
    }
    alert('form submitted successfully!\nName:'+ name +  '\nadrs:'+ adrs);
    document.getElementById('queryform').reset();
})

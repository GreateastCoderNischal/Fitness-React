
export async function exerciseAPI(muscle) {
    
    var apiKey = 'KByenGiViIcr51wN5l2teJc5Ao5nEqXy09mZCGSO';
    var url = 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            
            return response.json();
        })
        .then(result => {
            var final = result
            console.log(result);
            return final
        })
   
}


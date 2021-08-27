const generateManager = managerText =>{
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-mug-hot mr-2"></i>Manager</h2>
            <div class="flex-row justify-space-between">
                <div class="col-12 mb-2 bg-dark text-light p-3">
                    <h3 class="portfolio-item-title text-light">${managerText.name}</h3>
                    <h5 class="portfolio-languages">
                    Employee ID:
                    ${managerText.id}
                    </h5>
                    <p>Office Number: ${managerText.office}</p>
                    <a href="mailto: ${managerText.email}" class="btn"><i class="far fa-envelope mr-2"></i>${managerText.email}</a>
                </div>   
            </div>
        </section>
    `
};

const generateEmployees = employeeText =>{
    var employeeInfo = ``;
    for(var i=1; i<employeeText.employees.length;i++){
        if(employeeText.employees[i].role === 'Engineer'){
            employeeInfo += `
                <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-glasses mr-2"></i> ${employeeText.employees[i].role}</h2>
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="portfolio-item-title text-light">${employeeText.employees[i].name}</h3>
                        <h5 class="portfolio-languages">
                        Employee ID:
                        ${employeeText.employees[i].id}
                        </h5>
                        <p>Github:<a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${employeeText.employees[i].gitHub}">${employeeText.employees[i].gitHub}</a></p>
                        <a href="mailto: ${employeeText.employees[i].email}" class="btn"><i class="far fa-envelope mr-2"></i>${employeeText.employees[i].email}</a>
                    </div>   
                </div>
            `
        }
        if(employeeText.employees[i].role === 'Intern'){
            employeeInfo += `
                <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-user-graduate mr-2"></i>${employeeText.employees[i].role}</h2>
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="portfolio-item-title text-light">${employeeText.employees[i].name}</h3>
                        <h5 class="portfolio-languages">
                        Employee ID:
                        ${employeeText.employees[i].id}
                        </h5>
                        <p>School: ${employeeText.employees[i].school}</p>
                        <a href="mailto: ${employeeText.employees[i].email}" class="btn"><i class="far fa-envelope mr-2"></i>${employeeText.employees[i].email}</a>
                    </div>   
                </div>
            `
        }
    }
    return `
        <section class="my-3" id="portfolio">
             ${employeeInfo}   
        </section>
    `
};

module.exports = templateData => {
    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Profile Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-center align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${templateData.name}'s Team</h1>
        </div>
      </header>
      <main class="container my-5">
       ${generateManager(templateData)}
       ${generateEmployees(templateData)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Justin Perez</h3>
      </footer>
    </body>
    </html>
    `;
};
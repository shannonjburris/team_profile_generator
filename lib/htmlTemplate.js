const generateHTML = (team) => {
    // console.log(team);

    let cards = team.map((employee) => {
        if (employee.constructor.name === "Manager") {
            return `<div class="card col-4">
                        <h3>Manager</h3>
                        <h4>${employee.name}</h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>Office Number: ${employee.officeNumber}</li>
                        </ul>
                    </div>`
        }
        else if (employee.constructor.name === "Engineer") {
            return `<div class="card col-4">
                        <h3>Engineer</h3>
                        <h4>${employee.name}</h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>GitHub: <a href="https://github.com/${employee.github}>${employee.github}</a></li>
                        </ul>
                    </div>`
        }
        else if (employee.constructor.name === "Intern") {
            return `<div class="card col-4">
                        <h3>Intern</h3>
                        <h4>${employee.name}</h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>School: ${employee.school}</li>
                        </ul>
                    </div>`
        }
    })

    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${cards.join('')}
            </div>
        </div>
    </body>`

    return html;
}

module.exports = generateHTML;


const generateTeam = function (cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/0b1f03bb27.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
            <div class="bg-danger text-center py-5">
                <h1 class="text-light">My Team</h1>
            </div>
        </header>

        <main>
            <div class="container">
                <div id="team-members" class="row justify-content-center">
                    ${cards}
                </div>
            </div>
        </main>
    </body>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

    </html>
    `
}

const generateManagerCard = function (manager) {
    return `
    <div class="col-4 mt-5">
        <div class="card">
            <div class="bg-primary card-header text-light">
                <h2>${manager.name}</h2>
                <h3><i class="fa-solid fa-user-tie"></i>Manager</h3>
            </div>
            <div class="p-4 bg-light">
                <ul class="list-group list-group-flush card my-4">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

const generateEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-5">
        <div class="card">
            <div class="bg-primary card-header text-light">
                <h2>${engineer.name}</h2>
                <h3><i class="fa-solid fa-user-gear"></i>Engineer</h3>
            </div>
            <div class="p-4 bg-light">
                <ul class="list-group list-group-flush card my-4">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

const generateInternCard = function (intern) {
    return `
    <div class="col-4 mt-5">
        <div class="card">
            <div class="bg-primary card-header text-light">
                <h2>${intern.name}</h2>
                <h3><i class="fa-solid fa-school mr-2"></i>Intern</h3>
            </div>
            <div class="p-4 bg-light">
                <ul class="list-group list-group-flush card my-4">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

generatePage = (data) => {
    cardArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);
            cardArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            cardArray.push(engineerCard);
        } else {
            const internCard = generateInternCard(employee);
            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');
    const team = generateTeam(employeeCards);
    return  team;
}

module.exports = generatePage;
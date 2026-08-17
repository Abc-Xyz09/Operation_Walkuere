function getBreadCrumbs() {
    let parts = window.location.pathname
    .split("/")
    .filter(Boolean);

    basePath = "/Operation_Walkuere/"

    let currentPath = basePath;
    const paths = [basePath];

    for (const part of parts.slice(1)) {
    currentPath += part + "/";
    paths.push(currentPath);
    }

    innerList = [];

    for (let i = 0; i < paths.length; i++) {
        innerList.push(`<li class="breadcrumbs-item"><a href="${paths[i]}" class="breadcrumbs-link">${formatName(parts[i])}</a></li>`);
    }

    let completeList = `<ul class="breadcrumbs">${innerList.join(" ")}</ul>`;
    document.getElementById("breadcrumbs").innerHTML = completeList;
}

function formatName(part) {
    if (breadcrumbMap[part]) {
        return breadcrumbMap[part];
    }

    return part
        .replace(/[-_]/g, " ")
        .replace(/\.[^.]+$/, "")
}

const breadcrumbMap = {
    "der_Attentatsversuch_am_20_Juli": "der Attentatsversuch am 20. Juli",
    "Darstellungen_des_Attentatversuchs_in_der_Oeffentlichkeit": "Darstellungen des Attentatversuchs in der Öffentlichkeit",
    "Operation_Walkuere": "Startseite"
}

navigation = [

    {
        title: "to-do",
        url: "/Operation_Walkuere/to-do"
    },

    {
        title: "Operation Walküre",
        url: "/Operation_Walkuere",
        children: [
            {title: "Ziel", url: "/Operation_Walkuere/#Ziel"},
            {title: "Die Operation", url: "/Operation_Walkuere/#Die_Operation"},
            {title: "Die geplante Umsetzung", url: "/Operation_Walkuere/#Die_geplante_Umsetzung"},
            {title: "Die Ausführung von Operation Walküre", url: "/Operation_Walkuere/#Die_Ausfuehrung_von_Operation_Walkuere"},
            {title: "Gründe für das Scheitern", url:"/Operation_Walkuere/#Gruende_fuer_das_Scheitern"},
            {title: "Folgen", url:"/Operation_Walkuere/#Folgen"},
            {title: "Bedeutung heute", url:"/Operation_Walkuere/#Bedeutung_heute"},
            {title: "Kontroverse", url: "/Operation_Walkuere/#Kontroverse"}
        ]
    },

    {
        title: "Der Attentatsversuch am 20. Juli",
        url: "/Operation_Walkuere/der_Attentatsversuch_am_20_Juli/",
        children: [
            {title: "Gründe für das Scheitern", url:"/Operation_Walkuere/der_Attentatsversuch_am_20_Juli/#Gruende_fuer_das_Scheitern"}
        ]
    },

    {
        title: "Beteiligte Personen",
        url: "/Operation_Walkuere/beteiligte_Personen",
        children: [
            {
                title: "Claus Schenk Graf von Stauffenberg",
                url: "/Operation_Walkuere/Claus_Schenk_Graf_von_Stauffenberg/",
                children: [
                    {title: "Kontroverse", url: "/Operation_Walkuere/Claus_Schenk_Graf_von_Stauffenberg/#Kontroverse"}
                ]
            },
            {title: "Friedrich Olbricht", url: "/Operation_Walkuere/Friedrich_Olbricht/"},
            {title: "Ludwig Beck", url: "/Operation_Walkuere/Ludwig_Beck/"},
            {title: "Ludwig Beck", url: "/Operation_Walkuere/Ludwig_Beck/"},
            {title: "Albrecht Ritter Mertz von Quirnheim", url: "/Operation_Walkuere/Albrecht_Ritter_Mertz_von_Quirnheim/"},
            {title: "Henning von Tresckow", url: "/Operation_Walkuere/Henning_von_Tresckow/"},
            {title: "Carl Friedrich Goerdeler", url: "/Operation_Walkuere/Carl_Friedrich_Goerdeler/"},
            {title: "Werner von Haeften", url: "/Operation_Walkuere/Werner_von_Haeften/"},
            {title: "Erich Hoepner", url: "/Operation_Walkuere/Erich_Hoepner/"}
        ]
    },

    {
        title: "Darstellungen des Attentatversuchs in der Öffentlichkeit",
        url: "/Operation_Walkuere/Darstellungen_des_Attentatversuchs_in_der_Oeffentlichkeit/",
        children: [
            {title: "Darstellungen des 20. Julis zur Zeit der Nationalsozialisten", url:"/Operation_Walkuere/Darstellungen_des_Attentatversuchs_in_der_Oeffentlichkeit/#Nationalsozialisten"},
            {title: "Darstellungen des 20. Julis in der Nachkriegszeit", url:"/Operation_Walkuere/Darstellungen_des_Attentatversuchs_in_der_Oeffentlichkeit/#Nachkriegszeit"}
        ]
    },

    {
        title: "Quellen",
        url: "/Operation_Walkuere/quellen"
    }
]


function navigationHeader() {
    let navigationHeaderHtml = "";
    for (const primaryLayer of navigation) {
             navigationHeaderHtml += generateLayerNavigationHeader(navigation, 0);
    }
    document.getElementById("dropdown-content-layer1").innerHTML = navigationHeaderHtml;


    document.querySelectorAll(".toggle-navigation").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("dropdown-content-layer1").classList.toggle("active");
        });
    });

    document.querySelectorAll(".toggle-dropdown1-navigation").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        });
    });

    document.querySelectorAll(".toggle-dropdown2-navigation").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    document.querySelectorAll(".toggle-dropdown3-navigation").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

}


function generateLayerNavigationHeader(parent, parentLayer) {
    let currentLayer = parentLayer + 1;
    let child = "";
    for (const i of parent.children) {
        child +=  `

<div class="dropdown-layer${currentLayer}">
    <a href="${i.url}">
        ${i.title}
    </a>
        
        `;
        if (i.children) {
                child += `

<button type ="button" class="toggle-dropdown${currentLayer}-navigation">
    <span class="icon-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve">
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
        </svg>
    </span>
</button>

                `;
            }
            child += "</div>"
        if (i.children) {
            child += `<div class="dropdown-content-layer${currentLayer+1}-header">`
            child += generateChildrenNavigationHeader(i, currentLayer);
            child += "</div>"
        }

    }
    return child;
}

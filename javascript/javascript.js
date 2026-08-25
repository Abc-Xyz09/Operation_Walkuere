function getBreadCrumbs() {

    console.log("BreadCrumbs being called, yay!"); //debugging

    let parts = window.location.pathname
    .split("/")
    .filter(Boolean);

    const basePath = "/Operation_Walkuere/"

    let currentPath = basePath;
    const paths = [basePath];

    for (const part of parts.slice(1)) {
    currentPath += part + "/";
    paths.push(currentPath);
    }

    let innerList = [];

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
};


const navigation = [

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
                url: "/Operation_Walkuere/beteiligte_Personen/Claus_Schenk_Graf_von_Stauffenberg/",
                children: [
                    {title: "Kontroverse", url: "/Operation_Walkuere/beteiligte_Personen/Claus_Schenk_Graf_von_Stauffenberg/#Kontroverse"}
                ]
            },
            {
                title: "Friedrich Olbricht",
                url: "/Operation_Walkuere/beteiligte_Personen/Friedrich_Olbricht/",
                children:[
                    {title: "Werdegang", url: "/Operation_Walkuere/beteiligte_Personen/Friedrich_Olbricht/#Werdegang"},
                    {title: "Motivation", url: "/Operation_Walkuere/beteiligte_Personen/Friedrich_Olbricht/#Motivation"},
                    {title: "Rolle bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Friedrich_Olbricht/#Rolle"},
                    {title: "Folgen", url:"/Operation_Walkuere/beteiligte_Personen/Friedrich_Olbricht/#Folgen"}
                ]
            },
            {
                title: "Ludwig Beck",
                url: "/Operation_Walkuere/beteiligte_Personen/Ludwig_Beck/",
                children: [
                    {title: "Werdegang", url: "/Operation_Walkuere/beteiligte_Personen/Ludwig_Beck/#Werdegang"},
                    {title: "Rolle bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Ludwig_Beck/#Rolle_bei_Walkuere"},
                    {title: "Haltung und Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Ludwig_Beck/#Haltung_und_Folgen"}
                ]
            },
            {
                title: "Albrecht Ritter Mertz von Quirnheim",
                url: "/Operation_Walkuere/beteiligte_Personen/Albrecht_Ritter_Mertz_von_Quirnheim/",
                children: [
                    {title: "Werdegang", url: "/Operation_Walkuere/beteiligte_Personen/Albrecht_Ritter_Mertz_von_Quirnheim/#Werdegang"},
                    {title: "Motivation", url: "/Operation_Walkuere/beteiligte_Personen/Albrecht_Ritter_Mertz_von_Quirnheim/#Motivation"},
                    {title: "Rolle bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Albrecht_Ritter_Mertz_von_Quirnheim/#Rolle_bei_Walkuere"},
                    {title: "Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Albrecht_Ritter_Mertz_von_Quirnheim/#Folgen"}
                ]
            },
            {
                title: "Henning von Tresckow",
                url: "/Operation_Walkuere/beteiligte_Personen/Henning_von_Tresckow/",
                children: [
                    {title: "Werdegang", url:"/Operation_Walkuere/beteiligte_Personen/Henning_von_Tresckow/#Werdegang"},
                    {title: "Motivation", url: "/Operation_Walkuere/beteiligte_Personen/Henning_von_Tresckow/#Motivation"},
                    {title: "Rolle im Widerstand und bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Henning_von_Tresckow/#Rolle"},
                    {title: "Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Henning_von_Tresckow/#Folgen"}
                ]
            },
            {
                title: "Carl Friedrich Goerdeler",
                url: "/Operation_Walkuere/beteiligte_Personen/Carl_Friedrich_Goerdeler/",
                children: [
                    {title: "Werdegang", url: "/Operation_Walkuere/beteiligte_Personen/Carl_Friedrich_Goerdeler/#Werdegang"},
                    {title: "Mortivation", url: "/Operation_Walkuere/beteiligte_Personen/Carl_Friedrich_Goerdeler/#Motivation"},
                    {title: "Rolle beim Widerstand und bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Carl_Friedrich_Goerdeler/#Rolle"},
                    {title: "Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Carl_Friedrich_Goerdeler/#Folgen"}
                ]
            },
            {
                title: "Werner von Haeften",
                url: "/Operation_Walkuere/beteiligte_Personen/Werner_von_Haeften/",
                children: [
                    {title: "Werdegang", url:"/Operation_Walkuere/beteiligte_Personen/Werner_von_Haeften/#Werdegang"},
                    {title: "Motivation", url: "/Operation_Walkuere/beteiligte_Personen/Werner_von_Haeften/#Motivation"},
                    {title: "Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Werner_von_Haeften/#Folgen"}
                ]
            },
            {
                title: "Erich Hoepner",
                url: "/Operation_Walkuere/beteiligte_Personen/Erich_Hoepner/",
                children: [
                    {title: "Werdegang", url: "/Operation_Walkuere/beteiligte_Personen/Erich_Hoepner/#Werdegang"},
                    {title: "Rolle bei \"Walküre\"", url: "/Operation_Walkuere/beteiligte_Personen/Erich_Hoepner/#Rolle_bei_Walkuere"},
                    {title: "Folgen", url: "/Operation_Walkuere/beteiligte_Personen/Erich_Hoepner/#Folgen"}
                ]
            }
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
        url: "/Operation_Walkuere/Quellen"
    }
];


function navigationHeader() {

    console.log("navigation's been calle"); //debugging

    let navigationHeaderHtml = "<div class=\"dropdown-content-layer1\">";
    for (const i of navigation) {
                navigationHeaderHtml +=  `

<div class="dropdown-layer1">
    <a href="${i.url}">
        ${i.title}
    </a>
        
        `;
        if (i.children) {
                navigationHeaderHtml += `

<button type ="button" class="toggle-dropdown1-navigation">
    <span class="icon-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve">
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
        </svg>
    </span>
</button>

                `;
            }
            navigationHeaderHtml += "</div>"
        if (i.children) {
            navigationHeaderHtml += `<div class="dropdown-content-layer2">`
            navigationHeaderHtml += generateLayerNavigationHeader(i, 1);
            navigationHeaderHtml += "</div>"
        }

    }
    //debugging:
    console.log("dropdown-content:", document.getElementById("dropdown-content"));
    console.log("generated HTML:", navigationHeaderHtml);

    navigationHeaderHtml += "</div>"
    document.getElementById("dropdown-content").innerHTML = navigationHeaderHtml;


    document.querySelectorAll(".toggle-navigation").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("dropdown-content").classList.toggle("active");
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
            child += `<div class="dropdown-content-layer${currentLayer+1}">`
            child += generateLayerNavigationHeader(i, currentLayer);
            child += "</div>"
        }

    }
    return child;
}
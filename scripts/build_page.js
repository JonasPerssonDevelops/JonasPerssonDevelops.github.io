
// html = document.querySelector('html');
html = document.documentElement
pageId = html.getAttribute('data-page_id');

if (pageId = 'index')
{
    build_page_index();
}

function build_page_index()
{
    build_navbar();
}

function build_navbar()
{
    // Get the navbar ul and build links to populate it
    const nav_top_ul = document.getElementById('nav-top-ul');
    build_navbar_item(nav_top_ul, 'Experience', 'work.html');
    build_navbar_item(nav_top_ul, 'Software Projects', 'projects.html');
    build_navbar_item(nav_top_ul, 'Contact', 'contact.html');
}

function build_navbar_item(nav_top_ul, hyperlink_text, link_path)
{
    const li = document.createElement('li');
    const a = document.createElement('a');

    // Spec <li> element
    li.setAttribute('class', 'flex-item-nav');
    li.setAttribute('role', 'none');

    // Spec <a> element
    a.setAttribute('class', 'a-nav');
    a.setAttribute('href', link_path);
    a.setAttribute('role', 'menuitem');

    // Create link text
    const a_text_node = document.createTextNode(hyperlink_text);
    a.appendChild(a_text_node);

    li.appendChild(a);
    nav_top_ul.appendChild(li);
}

function build_footer()
{

}

function build_footer_item(footer, hyperlink_text, link_path)
{

}


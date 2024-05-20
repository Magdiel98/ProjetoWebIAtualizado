function showLoading()
{
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");

    const html = document.getElementsByTagName("html");

    html.appendChild(div);
}


function hideLoading()
{

}
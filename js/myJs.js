
var responseBodyRow = document.querySelector("#responseData")


var HttpClient = new XMLHttpRequest();

HttpClient.open("get","https://newsapi.org/v2/top-headlines?country=us&apiKey=3296811c25c0413a875376b605a48a31")
HttpClient.send()
console.log(HttpClient.response)

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
var responseBody = {}
var articles = []

var mainArticle=document.querySelector("#mainArticle");
var recentNewsContainer =document.querySelector("#recentNewsContainer");
var subMainArticles =document.querySelector("#subMainArticles");
HttpClient.addEventListener('readystatechange',function(){
    if(HttpClient.readyState == 4)
    {
        responseBody = (JSON.parse(HttpClient.response))
        articles = responseBody.articles
        showMainArticleBody();
        showSubMainArticles();
        showRecentNews();
    }
})

var mainArticleBody = "";
var recentNewsContainerBody ="";
var subMainArticlesBody=""


function showMainArticleBody(){
        
    mainArticleBody += 
            `
            <div class=" col-lg-9">
            <div class="binduz-er-editors-pack-thumb">
                <img src="${articles[0].urlToImage}" alt="">
            </div>
        </div>
        <div class=" col-lg-3">
            <div class="binduz-er-editors-pack-content" >
                <div class="binduz-er-meta-item">
                    <div class="binduz-er-meta-categories">
                        <a href="#">Technology</a>
                    </div>
                    <div class="binduz-er-meta-date">
                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                    </div>
                </div>
                <h4 class="binduz-er-title"><a href="#">${articles[0].title}.</a></h4>
                <div class="binduz-er-meta-author">
                    <div class="binduz-er-author">
                        <img src="assets/images/user-2.png" alt="">
                        <span>By <span>${articles[0].author}</span></span>
                    </div>
                </div>
            </div>
        </div>
            `
            mainArticle.innerHTML = mainArticleBody;
    }


function showRecentNews(){
    for (var i = 5 ; i < articles.length ; i++)
    {
        recentNewsContainerBody += 
        `
        <div class="binduz-er-recent-news-item mb-20">
        <div class="binduz-er-thumb">
            <img src="${articles[i].urlToImage}" alt="">
        </div>
        <div class="binduz-er-content">
            <div class="binduz-er-meta-item">
                <div class="binduz-er-meta-categories">
                    <a href="#">Technology</a>
                </div>
                <div class="binduz-er-meta-date">
                    <span><i class="fal fa-calendar-alt"></i> ${articles[i].publishedAt}</span>
                </div>
            </div>
            <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
            <p>${articles[i].content}</p>
        </div>
    </div>
        `
    }


    recentNewsContainer.innerHTML = recentNewsContainerBody;

}
function showSubMainArticles(){
    for (var i = 1 ; i < 5 ; i++)
    {
        subMainArticlesBody += 
        `
        <div class=" col-lg-3 col-md-6">
        <div class="binduz-er-video-post binduz-er-recently-viewed-item">
            <div class="binduz-er-latest-news-item">
                <div class="binduz-er-thumb">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>
                <div class="binduz-er-content">
                    <div class="binduz-er-meta-item">
                        <div class="binduz-er-meta-categories">
                            <a href="#">Technology</a>
                        </div>
                        <div class="binduz-er-meta-date">
                            <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                        </div>
                    </div>
                    <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
                    <div class="binduz-er-meta-author">
                        <span>By <span>${articles[i].author}</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }


    subMainArticles.innerHTML = subMainArticlesBody;

}
// author
// : 
// "Chris Boyette, Jason Hanna"
// content
// : 
// "A 6.4 magnitude earthquake shook Northern Californias Eureka area early Tuesday, according to the US Geological Survey, and thousands are without power in its wake.\r\nThe quake, recorded at 2:34 a.m. … [+976 chars]"
// description
// : 
// "A 6.4 magnitude earthquake shook Northern California's Eureka area early Tuesday, according to the US Geological Survey, and thousands are without power in its wake."
// publishedAt
// : 
// "2022-12-20T12:28:00Z"
// source
// : 
// {id: 'cnn', name: 'CNN'}
// title
// : 
// "Thousands without power after 6.4 magnitude earthquake strikes Northern California - CNN"
// url
// : 
// "https://www.cnn.com/2022/12/20/us/humboldt-county-california-earthquake/index.html"
// urlToImage
// : 
// "https://media.cnn.com/api/v1/images/stellar/prod/2212201154 

// HttpClient.addEventListener('readystatechange', function(){
//     if(HttpClient.readyState == 4)
//     {
//        console.log(HttpClient.response)
      
//     }
// })







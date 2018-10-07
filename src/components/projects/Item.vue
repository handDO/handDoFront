<template>
  <v-card class="project_item">
    <div class="project_item-author">
      <div class="author-avatar">
        <img v-bind:src="project.author.avatar">
      </div>
      <div class="author-name">
        {{project.author.name}}
      </div>
      <div class="author-rating">
        <div class="rating-icon">
          <svg viewBox="0 0 47.94 47.94">
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
            c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
            c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
            c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
            c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
            C22.602,0.567,25.338,0.567,26.285,2.486z"/>
          </svg>
        </div>
        <div class="rating-score">
          {{project.author.rating}}
        </div>
      </div>
    </div>
    <div class="project_item-main">
      <div class="main-title">
        {{project.title}}
      </div>
      <div class="main-date_prize_row">
        <div class="main-publication_date">
          {{project.date_created}}
        </div>
        <div class="main-payment">
          {{project.prize}}
        </div>
      </div>
      <div class="main-additionals">
        <div class="main-remaining_time">
          <div class="remaining_time-icon">
            <svg viewBox="0 0 47.001 47.001">
              <path d="M46.907,20.12c-0.163-0.347-0.511-0.569-0.896-0.569h-2.927C41.223,9.452,32.355,1.775,21.726,1.775
              C9.747,1.775,0,11.522,0,23.501C0,35.48,9.746,45.226,21.726,45.226c7.731,0,14.941-4.161,18.816-10.857
              c0.546-0.945,0.224-2.152-0.722-2.699c-0.944-0.547-2.152-0.225-2.697,0.72c-3.172,5.481-9.072,8.887-15.397,8.887
              c-9.801,0-17.776-7.974-17.776-17.774c0-9.802,7.975-17.776,17.776-17.776c8.442,0,15.515,5.921,17.317,13.825h-2.904
              c-0.385,0-0.732,0.222-0.896,0.569c-0.163,0.347-0.11,0.756,0.136,1.051l4.938,5.925c0.188,0.225,0.465,0.355,0.759,0.355
              c0.293,0,0.571-0.131,0.758-0.355l4.938-5.925C47.018,20.876,47.07,20.467,46.907,20.12z"/>
              <path d="M21.726,6.713c-1.091,0-1.975,0.884-1.975,1.975v11.984c-0.893,0.626-1.481,1.658-1.481,2.83
              c0,1.906,1.551,3.457,3.457,3.457c0.522,0,1.014-0.125,1.458-0.334l6.87,3.965c0.312,0.181,0.65,0.266,0.986,0.266
              c0.682,0,1.346-0.354,1.712-0.988c0.545-0.943,0.222-2.152-0.724-2.697l-6.877-3.971c-0.092-1.044-0.635-1.956-1.449-2.526V8.688
              C23.701,7.598,22.816,6.713,21.726,6.713z M21.726,24.982c-0.817,0-1.481-0.665-1.481-1.48c0-0.816,0.665-1.481,1.481-1.481
              s1.481,0.665,1.481,1.481C23.207,24.317,22.542,24.982,21.726,24.982z"/>
           </svg>
          </div>
          <div class="remaining_time-value">
            {{project.time_left}}
          </div>
        </div>
      </div>
      <div class="main-category_statistics_row">
        <div class="main-category">
          Категория: {{project.categore}}
        </div>
        <div class="main-statistics">
          <div class="statistics-views">
            <div class="views-count">
              {{project.views}}
            </div>
            <div class="views-icon">
              <svg viewBox="0 0 488.85 488.85">
                <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
              </svg>
            </div>
          </div>
          <div class="statistics-responses">
            <div class="responses-count">
              {{project.responses}}
            </div>
            <div class="responses-icon">
              <svg viewBox="0 0 510 510">
                <path d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204
                S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255
                s114.75,255,255,255s255-114.75,255-255H459z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'ProjectsItem',
    props: ['project']
  }
</script>

<style scoped>
  .project_item {
    position: relative;
    display: flex;
    margin-top: 20px;
  }
  
  .project_item-author {
    width: 100px;
  }
  
  .project_item-author .author-avatar {
    padding: 20px 20px 5px;
  }
  
  .project_item-author .author-avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  
  .project_item-author .author-name {
    text-align: center;
    font-size: 0.9em;
    font-weight: 500;
    color: #2955a8;
  }
  
  .project_item-author .author-rating {
    height: 30px;
    margin: 0px 20px;
    border-radius: 5px;
    display: flex;
    background: #2955a8;
  }
  
  .project_item-author .author-rating .rating-icon {
    height: 100%;
    width: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .project_item-author .author-rating .rating-icon svg {
    width: 11px;
    height: 11px;
    fill: #FFD600;
  }
  
  .project_item-author .author-rating .rating-score {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }
  
  .project_item-main {
    flex-grow: 2;
    padding: 0px 20px 0px 10px;
  }
  
  .project_item-main .main-date_prize_row {
    display: flex;
    padding-top: 5px;
    justify-content: space-between;
  }
  
  .project_item-main .main-title {
    color: #2855a8;
    padding-top: 20px;
    font-size: 1.3em;
  }
  
  .project_item-main .main-publication_date {
    font-size: 11px;
  }
  
  .project_item-main .main-payment {
    color: #ffffff;
    background: #009688;
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 20px;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 
                0 6px 10px 0 rgba(0,0,0,.14), 
                0 1px 18px 0 rgba(0,0,0,.12);
  }
  
  .project_item-main .main-remaining_time {
    display: flex;
    height: 30px;
    width: 110px;
    border-radius: 5px;
    background: #757575;
  }
  
  .project_item-main .main-remaining_time .remaining_time-icon {
    display: flex;
    width: 24px;
    background: #ffffff;
    border: 2px solid #757575;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  }
  
  .project_item-main .main-remaining_time .remaining_time-icon svg {
    width: 14px;
    fill: #757575;
  }
  
  .project_item-main .main-remaining_time .remaining_time-value {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
    color: #fff;
  }
  
  .project_item-main .main-category_statistics_row {
    display: flex;
    padding: 10px 1px;
    justify-content: space-between;
  }
  
  .project_item-main .main-category {
    color: #6180b6;
  }
  
  .project_item-main .main-statistics {
    display: flex;
    align-items: center;
    height: 20px;
  }
  
  .project_item-main .main-statistics .statistics-views {
    display: flex;
    align-items: center;
  }
  
  .project_item-main .main-statistics .statistics-views .views-count {
    padding-right: 6px;
    font-size: 12px;
    color: #6180b6;
  }
  
  .project_item-main .main-statistics .statistics-views .views-icon {
    display: grid;
    align-items: center;
    width: 12px;
  }
  
  .project_item-main .main-statistics .statistics-views .views-icon svg {
    fill: #6180b6;
  }
  
  .project_item-main .main-statistics .statistics-responses {
    display: flex;
    align-items: center;
  }
  
  .project_item-main .main-statistics .statistics-responses .responses-count {
    padding-left: 15px;
    padding-right: 3px;
    font-size: 12px;
    color: #6180b6;
  }
  
  .project_item-main .main-statistics .statistics-responses .responses-icon {
    display: flex;
  }
  
  .project_item-main .main-statistics .statistics-responses .responses-icon svg {
    width: 10px;
    fill: #6080b6;
  }
</style>

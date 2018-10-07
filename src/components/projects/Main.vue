<template>
  <div>

  <v-card>
    <v-card-text>
      <v-layout>
        <v-flex xs12 class="count_projects">
          <span>15 </span>
          <span>ЗАКАЗОВ</span>
        </v-flex>
        <v-flex>
          <v-btn flat="">Добавить новый заказ</v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn fab dark color="teal" absolute right @click="opened_cat_menu = !opened_cat_menu">
        <v-icon dark>list</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card>
    <v-fade-transition>
      <v-layout v-if="opened_cat_menu" class="categories_menu">
        <v-flex xs6>
          <v-checkbox
            :label="`IT, Компьютеры`"
            value="itAndComputers"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Дизайн`"
            value="design"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Красота и здоровье`"
            value="beautyAndHealth"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Образование`"
            value="education"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Мероприятия`"
            value="events"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Ремонт и строительство`"
            value="repairAndConstruction"
            v-model="categories"
          ></v-checkbox>
        </v-flex>
        <v-flex xs6>
          <v-checkbox
            :label="`Транспортные услуги`"
            value="transport"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Помощь по дому`"
            value="homeHelp"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Уход за животными`"
            value="careOfAnimals"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Фото и видео`"
            value="photoAndVideo"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Юридическая помощь`"
            value="legalAid"
            v-model="categories"
          ></v-checkbox>
          <v-checkbox
            :label="`Другое`"
            value="other"
            v-model="categories"
          ></v-checkbox>          
        </v-flex>        
      </v-layout>
    </v-fade-transition>
  </v-card>

  <div class="projects_list">
    <item-project v-for="project in projects"
                  v-bind:key="project.id"
                  v-bind:project="project">
    </item-project>
  </div>
</div>
</template>

<script>
import ItemProject from "./Item";

export default {
  name: "ProjectsMain",
  components: {
    ItemProject
  },
  data() {
    return {
      opened_cat_menu: false,
      categories: [
        "itAndComputers",
        "design",
        "beautyAndHealth",
        "education",
        "events",
        "repairAndConstruction",
        "transport",
        "homeHelp",
        "careOfAnimals",
        "photoAndVideo",
        "legalAid",
        "other"
      ],
      projects: [
        {
          id: 1,
          author: {
            id: 1,
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
            name: "Николай",
            rating: 1234
          },
          title: "Нужен фотограф для дня рождения",
          date_created: "14.07 18:56",
          time_left: "170:25:30",
          categore: "photoAndVideo",
          prize: "3000  P",
          views: 1435,
          responses: 3
        },
        {
          id: 1,
          author: {
            id: 1,
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
            name: "Николай",
            rating: 1234
          },
          title: "Нужен фотограф для дня рождения",
          date_created: "14.07 18:56",
          time_left: "170:25:30",
          categore: "photoAndVideo",
          prize: "3000  P",
          views: 1435,
          responses: 3
        },
        {
          id: 1,
          author: {
            id: 1,
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
            name: "Николай",
            rating: 1234
          },
          title: "Нужен фотограф для дня рождения",
          date_created: "14.07 18:56",
          time_left: "170:25:30",
          categore: "photoAndVideo",
          prize: "3000  P",
          views: 1435,
          responses: 3
        },
        {
          id: 1,
          author: {
            id: 1,
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
            name: "Николай",
            rating: 1234
          },
          title: "Нужен фотограф для дня рождения",
          date_created: "14.07 18:56",
          time_left: "170:25:30",
          categore: "photoAndVideo",
          prize: "3000  P",
          views: 1435,
          responses: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.count_projects {
  display: flex;
  align-items: center;
}

.count_projects span:first-of-type {
  font-size: 1.1em;
  font-weight: 500;
  padding-right: 6px;
}

.count_projects span:last-of-type {
  font-weight: 500;
}

.categories_menu {
  padding: 10px 20px;
}
</style>

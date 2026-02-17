<template>
    <div class="footer">
        <div class="footer__list">
            <div class="footer__item" v-for="item in footerList" :key="item.category">
                <p class="footer__item--title">{{ item.category }}</p>
                <ul class="footer__item--list">
                    <li class="footer__item--list-item" v-for="listItem in item.listItem" :key="listItem.title">
                        <a class="footer__item--link" :href="listItem.link">{{ listItem.title }}</a>
                    </li>
                </ul>
            </div>
        </div>      
    </div>
</template>
<script setup lang="ts">
const footerList = [
    {category: 'Каталог',
    listItem: [
        {
            title: 'Все бренды',
            link: '#'
        },
        {
            title: 'Nike',
            link: '#'
        },
        {
            title: 'Adidas',
            link: '#'
        },
        {
            title: 'Puma',
            link: '#'
        },
        {
            title: 'New Balance',
            link: '#'
        }
    ]
    },
    {category: 'Помощь',
      listItem: [
        {
            title: 'Доставка',
            link: '#'
        },
        {
            title: 'Заказ и оплата',
            link: '#'
        },
        {
            title: 'Обмен и Возврат',
            link: '#'
        },
        {
            title: 'F.A.Q',
            link: '#'
        }
    ]
    },
    {category: 'Информация',
       listItem: [
        {
            title: 'Преимущества',
            link: '#'
        },
        {
            title: 'Гарантия и безопасность',
            link: '#'
        },
        {
            title: 'Индивидуальный заказ',
            link: '#'
        },
        {
            title: 'Акции',
            link: '#'
        }
    ]
    },
    {category: 'Компания',
      listItem: [
        {
            title: 'О нас',
            link: '#'
        },
        {
            title: 'Блог',
            link: '#'
        },
        {
            title: 'Отзывы',
            link: '#'
        },
        {
            title: 'Контакты',
            link: '#'
        }
    ]
    },
    
]
</script>
<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--default-black);
    color: var(--default-white);
    padding: 70px 20px;
    @media (min-width: 768px) {
        padding: 100px 60px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        @media (min-width: 768px) {
            flex-direction: row;
            gap: 40px;
        }
    }
    
    &__item--title {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: var(--default-gray);
        margin-bottom: 16px;
    }

    &__item--list-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        @media (min-width: 768px) {
            gap: 40px;
        }
    }
}
</style>
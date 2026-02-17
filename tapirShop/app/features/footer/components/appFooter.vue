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
            link: 'javascript:void(0)'
        },
        {
            title: 'Nike',
            link: 'javascript:void(0)'
        },
        {
            title: 'Adidas',
            link: 'javascript:void(0)'
        },
        {
            title: 'Puma',
            link: 'javascript:void(0)'
        },
        {
            title: 'New Balance',
            link: 'javascript:void(0)'
        }
    ]
    },
    {category: 'Помощь',
      listItem: [
        {
            title: 'Доставка',
            link: 'javascript:void(0)'
        },
        {
            title: 'Заказ и оплата',
            link: 'javascript:void(0)'
        },
        {
            title: 'Обмен и Возврат',
            link: 'javascript:void(0)'
        },
        {
            title: 'F.A.Q',
            link: 'javascript:void(0)'
        }
    ]
    },
    {category: 'Информация',
       listItem: [
        {
            title: 'Преимущества',
            link: 'javascript:void(0)'
        },
        {
            title: 'Гарантия и безопасность',
            link: 'javascript:void(0)'
        },
        {
            title: 'Индивидуальный заказ',
            link: 'javascript:void(0)'
        },
        {
            title: 'Акции',
            link: 'javascript:void(0)'
        }
    ]
    },
    {category: 'Компания',
      listItem: [
        {
            title: 'О нас',
            link: 'javascript:void(0)'
        },
        {
            title: 'Блог',
            link: 'javascript:void(0)'
        },
        {
            title: 'Отзывы',
            link: 'javascript:void(0)'
        },
        {
            title: 'Контакты',
            link: 'javascript:void(0)'
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
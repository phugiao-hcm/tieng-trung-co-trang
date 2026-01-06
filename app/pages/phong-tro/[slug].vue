<template>
    <section v-if="!ui.isLoading && property">
        <div
            class="max-w-6xl mx-auto mt-6 px-4 md:px-0 grid gap-4 sm:grid-cols-1 md:grid-cols-3"
        >
            <!-- Bên trái: Hình ảnh và thông tin -->
            <div class="md:col-span-2 space-y-4">
                <div
                    class="w-full mx-auto overflow-hidden grid grid-cols-1 gap-4"
                >
                    <!-- Main Swiper -->
                    <div class="w-full rounded-lg overflow-hidden">
                        <iframe
                            class="w-full h-100"
                            src="https://www.youtube.com/embed/OohH8R-vNkk"
                            title="YouTube Shorts"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>

                <!-- Tiêu đề -->
                <h1
                    class="text-xl sm:text-lg md:text-xl font-bold text-gray-800 mt-2"
                >
                    Bài 1 - Giáo trình Hán ngữ 1 ( mẫu )
                </h1>

                <!-- Giá + diện tích -->
                <div class="flex flex-wrap items-center gap-3 mt-2">
                    <p class="text-red-600 text-2xl sm:text-xl font-semibold">
                        {{ formatPriceVND(property.price) }} /tháng
                    </p>

                    <div class="flex items-center gap-1">
                        <svg
                            v-for="item in 5"
                            :key="item"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.286 3.955c.3.921-.755 1.688-1.538 1.118L10 13.187l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.955-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162l1.286-3.955z"
                            />
                        </svg>
                    </div>
                </div>

                <!-- Địa chỉ -->
                <div
                    class="flex items-center text-gray-600 mt-2 text-sm sm:text-xs md:text-sm"
                >
                    <P>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-4 w-4 h-4 text-gray-500 mr-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>
                    </P>
                    <p class="text-sm text-gray-800">
                        {{ property.houseNo }}
                    </p>
                </div>

                <!-- MÔ TẢ CHI TIẾT -->
                <div class="bg-white rounded-lg shadow p-4 mt-4 md:mt-6">
                    <h2 class="font-bold text-lg mb-3">Mô tả chi tiết</h2>
                    <div
                        class="text-gray-700 whitespace-pre-line leading-relaxed"
                        v-html="property.content"
                    />
                </div>

                <!-- TRẢ LỜI BÌNH LUẬN -->
                <div class="space-y-4">
                    <h1 class="text-xl sm:text-lg md:text-xl font-bold mt-2">
                        Bình luận (20)
                    </h1>
                    <div
                        v-for="comment in comments"
                        :key="comment.id"
                        class="flex gap-3"
                    >
                        <!-- Avatar -->
                        <img
                            :src="comment.avatar"
                            class="w-10 h-10 rounded-full object-cover"
                        />

                        <!-- Content -->
                        <div class="bg-gray-100 rounded-2xl px-4 py-2 flex-1">
                            <p class="font-semibold text-sm">
                                {{ comment.name }}
                            </p>
                            <p class="text-sm text-gray-700">
                                {{ comment.content }}
                            </p>

                            <!-- Actions -->
                            <div class="flex gap-4 mt-1 text-xs text-gray-500">
                                <button class="hover:text-orange-500">
                                    Thích
                                </button>
                                <button class="hover:text-orange-500">
                                    Trả lời
                                </button>
                                <span>{{ comment.time }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bên phải: Liên hệ -->
            <div class="md:col-span-1 mb-2">
                <div
                    class="bg-white rounded-lg shadow p-4 md:sticky md:top-20 space-y-3"
                >
                    <!-- Liên hệ -->
                    <div class="flex items-center gap-3 mb-3">
                        <div>
                            <h3
                                class="font-semibold text-xl sm:text-lg md:text-xl mb-1"
                            >
                                Cấp độ: Sơ cấp
                            </h3>
                            <p
                                class="text-red-600 text-sm text-sm sm:text-xs md:text-sm mb-1"
                            >
                                Số bài học: 15
                            </p>
                            <p class="text-sm text-gray-500">
                                Thời lượng: 15 buổi
                            </p>
                        </div>
                    </div>

                    <button
                        class="w-full bg-orange-500 text-white py-2 rounded-lg mb-2 hover:bg-orange-600 text-sm sm:text-xs md:text-sm"
                    >
                        Đăng ký ngay
                    </button>
                    <button
                        class="w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 text-sm sm:text-xs md:text-sm"
                    >
                        Gọi: 093770xxxx
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Bên phải: CÁC BÀI HỌC TIẾP THEO -->
    <section class="bg-[#0f172a] py-10 mt-6">
        <div class="max-w-7xl mx-auto px-4">
            <div class="mb-4">
                <h1
                    class="text-xl sm:text-lg md:text-xl font-bold text-white mt-2"
                >
                    Giáo trình Hán ngữ 1 ( mẫu )
                </h1>
            </div>
            <Swiper
                :slides-per-view="1.2"
                :space-between="20"
                :breakpoints="{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 4.2 },
                }"
                class="overflow-visible"
            >
                <SwiperSlide v-for="movie in movies" :key="movie.id">
                    <div class="group relative">
                        <!-- CARD -->
                        <div
                            class="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                :src="movie.image"
                                class="w-full h-full object-cover group-hover:scale-105 transition"
                            />

                            <!-- Gradient -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                            ></div>

                            <!-- Badge -->
                            <div class="absolute bottom-3 left-3 flex gap-2">
                                <span
                                    class="px-2 py-1 text-xs bg-gray-700 text-white rounded"
                                >
                                    {{ movie.badge }}
                                </span>
                                <span
                                    class="px-2 py-1 text-xs bg-green-600 text-white rounded"
                                >
                                    {{ movie.badge2 }}
                                </span>
                            </div>
                        </div>

                        <!-- INFO -->
                        <div class="mt-4 relative">
                            <!-- Rank -->
                            <div
                                class="absolute -left-2 -top-4 text-7xl font-black text-yellow-400 opacity-90"
                            >
                                {{ movie.rank }}
                            </div>

                            <div class="pl-10">
                                <h3 class="text-white font-semibold text-lg">
                                    {{ movie.title }}
                                </h3>
                                <p class="text-gray-400 text-sm">
                                    {{ movie.sub }}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

    <News class="hidden" />
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import News from "@/components/posts/News.vue";
import { usePhongTroDetail } from "~/apis/posts";
const { $amplitude } = useNuxtApp();

import { useRoute } from "vue-router";
const route = useRoute();

definePageMeta({
    alias: ["/phong-tro/:slug"], // URL phụ
});

useHead({
    link: [
        {
            rel: "canonical",
            href: "https://trodayroi.vn/phong-tro/" + route.params.slug,
        },
    ],
});

const ui = reactive({
    isLoading: false,
});

const comments = ref([
    {
        avatar: "https://www.rophim.li/images/avatars/pack3/06.jpg",
        name: "Nguyễn Thị Lan",
        content:
            "Em chưa biết gì tiếng Trung thì học khóa này có theo kịp không ạ?",
        time: "01/01/2026",
    },
    {
        avatar: "https://www.rophim.li/images/avatars/pack3/06.jpg",
        name: "Trần Minh Quân",
        content:
            "Khóa học có dạy giao tiếp thực tế không hay chỉ học ngữ pháp?",
        time: "05/01/2026",
    },
]);

const movies = [
    {
        id: 1,
        title: "Chào hỏi cơ bản",
        sub: "基本问候",
        image: "/images/bai-giang/tieng-trung-bai-1.png",
        rank: 1,
        badge: "PD. 14",
        badge2: "TM. 14",
    },
    {
        id: 2,
        title: "Giới thiệu bản thân",
        sub: "自我介绍",
        image: "/images/bai-giang/tieng-trung-bai-1.png",
        rank: 2,
        badge: "PD. 17",
        badge2: "TM. 17",
    },
    {
        id: 3,
        title: "Công việc / học tập",
        sub: "工作 / 学习",
        image: "/images/bai-giang/tieng-trung-bai-1.png",
        rank: 3,
        badge: "PD. 40",
        badge2: "TM. 35",
    },
    {
        id: 4,
        title: "Hỏi phương hướng",
        sub: "问路",
        image: "/images/bai-giang/tieng-trung-bai-1.png",
        rank: 4,
        badge: "PD. 8",
        badge2: "LT. 8",
    },
    {
        id: 5,
        title: "Sở thích",
        sub: "兴趣爱好",
        image: "/images/bai-giang/tieng-trung-bai-1.png",
        rank: 5,
        badge: "PD. 1155",
        badge2: "LT. 1017",
    },
];

// modules Swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Swiper thumbs sync
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    console.log("open setThumbsSwiper");
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

// dữ liệu mẫu
const property = ref(null);

// ẩn hiện số điện thoại
const showPhone = ref(false);
const maskedPhone = computed(() =>
    showPhone.value ? property.value.authorMobile : "**** *** ***"
);

// slug = "nha-tro-tan-thanh-123"
const slug = route.params.slug;
// Tách ID (sau dấu "-" cuối cùng)
const id = slug.split("-").pop();

onMounted(() => {
    $amplitude.track("view_room_detail", {
        label: "Xem chi tiết phòng",
    });

    fetchProjects();
});

const fetchProjects = async () => {
    try {
        ui.isLoading = true;
        const { data, pending, error } = await usePhongTroDetail(id);
        property.value = data.value.data;
    } catch (e) {
        console.error(e);
    } finally {
        ui.isLoading = false;
    }
};

const facilityTexts = (facilities) => {
    return SET_TEXT_FACILITY_ROOM.filter((item) =>
        facilities.includes(item.value)
    ).map((item) => item.label);
};
</script>

<style>
/* Highlight thumbnail active */
.swiper-slide-thumb-active img {
    border: 2px solid #f97316; /* Tailwind orange-500 */
}
/* Navigation container */
.swiper-button-prev,
.swiper-button-next {
    width: 36px;
    height: 36px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    color: #111;
    transition: all 0.2s ease;
}

/* Hover & active */
.swiper-button-prev:hover,
.swiper-button-next:hover {
    transform: scale(1.1);
}

.swiper-button-prev:active,
.swiper-button-next:active {
    transform: scale(0.95);
}

/* Icon size */
.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 16px;
    font-weight: bold;
}

/* Position đẹp hơn */
.swiper-button-prev {
    left: 8px;
}

.swiper-button-next {
    right: 8px;
}

.custom-lightbox {
    background: white;
}

.btn__next,
.btn__prev {
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    padding: 6px;

    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    color: #111 !important;
    transition: all 0.2s ease;
}
</style>

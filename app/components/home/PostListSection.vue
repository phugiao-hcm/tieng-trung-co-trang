<template>
    <section class="py-12">
        <div class="max-w-screen-xl mx-auto px-4">
            <h1
                class="text-4xl font-extrabold text-orange-500 mb-3 relative inline-block"
            >
                Học tiếng Trung tại Phước Hòa – Phú Giáo
                <span
                    class="absolute left-0 -bottom-2 w-30 h-1 bg-orange-500 rounded-full"
                ></span>
            </h1>
            <p class="text-gray-600 mb-8">
                Khóa học tiếng Trung dành cho người mới bắt đầu tại nhà riêng
                của tôi ở Phước Hòa, Phú Giáo sẽ giúp bạn tự tin giao tiếp chỉ
                sau một thời gian ngắn. Với lộ trình học tập bài bản, bạn sẽ nắm
                vững phát âm, ngữ pháp và từ vựng thông dụng.
            </p>

            <section class="py-8">
                <div class="max-w-7xl mx-auto">
                    <div class="mb-4">
                        <h1
                            class="text-xl sm:text-lg md:text-xl font-bold text-gray-800"
                        >
                            Bạn đang quan tâm gì?
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <!-- Card 1 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100"
                            >
                                <!-- Icon -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 text-orange-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11 5l6 6-6 6M5 5l6 6-6 6"
                                    />
                                </svg>
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Phát âm chuẩn xác
                            </h3>
                            <p class="text-gray-600">
                                Học chuẩn Pinyin ngay từ đầu với giáo viên tận
                                tâm.
                            </p>
                        </div>

                        <!-- Card 2 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100"
                            >
                                <!-- Icon -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 text-orange-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8h10M7 12h6m-6 4h10"
                                    />
                                </svg>
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Giao tiếp tự tin
                            </h3>
                            <p class="text-gray-600">
                                Thực hành liên tục qua các tình huống thực tế.
                            </p>
                        </div>

                        <!-- Card 3 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100"
                            >
                                <!-- Icon -->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 text-orange-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6v6l4 2"
                                    />
                                </svg>
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Lộ trình bài bản
                            </h3>
                            <p class="text-gray-600">
                                Giáo trình được thiết kế đặc biệt cho người mới
                                bắt đầu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-8 rounded-2xl bg-gray-200 px-6">
                <div class="mb-4">
                    <h1
                        class="text-xl sm:text-lg md:text-xl font-bold text-gray-800"
                    >
                        Giáo trình cơ bản (Mẫu)
                    </h1>
                </div>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <template v-if="pending">
                        <Skeleton v-for="n in 4" :key="n" />
                    </template>
                    <template v-else>
                        <PropertyCard
                            v-for="(item, index) in postList"
                            :key="index"
                            :property="item"
                        />
                    </template>
                </div>
            </section>

            <section class="py-8">
                <div class="mb-4">
                    <h1
                        class="text-xl sm:text-lg md:text-xl font-bold text-gray-800"
                    >
                        Mẹo liên quan (Mẫu)
                    </h1>
                </div>
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <!-- Card 1 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-orange-100"
                            >
                                <img
                                    src="/images/news/bang-chu-cai-pinyin.jpg"
                                    alt="property"
                                    class="w-full h-52 sm:h-56 object-cover rounded-t"
                                />
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Cách Học Từ Vựng Tiếng Trung Hiệu Quả
                            </h3>
                            <p class="text-gray-600">
                                Khám phá những phương pháp ghi nhớ từ vựng tiếng
                                Trung đơn giản và dễ áp dụng nhất.
                            </p>
                        </div>

                        <!-- Card 2 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-orange-100"
                            >
                                <img
                                    src="/images/news/lap-ke-hoach-tu-vung.jpg"
                                    alt="property"
                                    class="w-full h-52 sm:h-56 object-cover rounded-t"
                                />
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Phát Âm Pinyin Chuẩn Chỉ Trong 3 Bước
                            </h3>
                            <p class="text-gray-600">
                                Hướng dẫn chi tiết cách phát âm chuẩn Pinyin,
                                nền tảng quan trọng của tiếng Trung.
                            </p>
                        </div>

                        <!-- Card 3 -->
                        <div
                            class="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-orange-100"
                            >
                                <img
                                    src="/images/news/tieng-trung-giao-tiep-co-ban.jpg"
                                    alt="property"
                                    class="w-full h-52 sm:h-56 object-cover rounded-t"
                                />
                            </div>

                            <h3
                                class="mb-3 text-xl font-semibold text-gray-900"
                            >
                                Top Câu Giao Tiếp Tiếng Trung Cơ Bản
                            </h3>
                            <p class="text-gray-600">
                                Những câu nói thông dụng giúp bạn tự tin khi
                                giao tiếp cơ bản vơi người Trung Quốc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import PropertyCard from "./PropertyCard.vue";
import { usePhongTroList } from "~/apis/posts";
import Skeleton from "~/components/skeleton/CardSkeleton.vue";

const postList = ref<any[]>([]);

// gọi API
const { data, pending } = await usePhongTroList({ page: 1, limit: 20 });
postList.value = data.value.data.phongTroList;
</script>

<template>
    <div class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-dark position-absolute w-100"></div>
        <!-- aside -->
        <Sidebar></Sidebar>
        <main class="main-content position-relative border-radius-lg ">
            <!-- navbar -->
            <Nav></Nav>
            <div class="container-fluid py-4">
                <slot />
                <Footer></Footer>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import Nav from '~/components/Nav.vue';
import Sidebar from '~/components/Sidebar.vue';

    const pageTitle = useState('pageTitle', () => 'Dashboard')
</script>
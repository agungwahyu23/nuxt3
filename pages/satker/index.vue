<script setup lang="ts">
    useHead({
        title: "Data Master",
    });

    const config = useRuntimeConfig();

    const { data: agendas } = await useAsyncData('agenda', () =>
        $fetch(`${config.public.apiBase}/api/data-agenda`) as any
    )
    console.log(agendas);
    

    definePageMeta({
        layout: "admin"
    })
    
</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <NuxtLink to="/satker/create" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</NuxtLink>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(agenda, index) in agendas?.data" :key="index">
                                <td>{{ agenda.title }}</td>
                                <td>
                                    <NuxtLink :to="`/agenda/edit/${agenda.id}`" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</NuxtLink>
                                    <button class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
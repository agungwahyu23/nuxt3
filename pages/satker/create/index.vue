<script setup lang="ts">
import { USelect } from '#components';


    //meta title
    useHead({
        title: 'Create Agenda',
    });

    //init config
    const config = useRuntimeConfig();  

    //init router
    const router = useRouter();

   const items = [
      { label: 'Dinas Pendidikan', value: 'dinas_pendidikan' },
      { label: 'Dinas Kesehatan', value: 'dinas_kesehatan' },
      { label: 'Dinas PU', value: 'dinas_pu' }
    ]

    //define state
    const image = ref('');
    const title = ref('');
    const start_time = ref('');
    const end_time = ref('');
    const location = ref('');
    const leader = ref('');
    const description = ref('');
    const satker = ref<string[]>([])
    const errors  : any  = ref({});

    //method for handle file changes
    const handleFileChange = ( e: any ) => {

        //assign file to state 
        image.value = e.target.files[0]
    }

    //method "storePost"
    const storePost = async () => {
        
        //init formData
        let formData = new FormData();

        //assign state value to formData
        formData.append('image', image.value);
        formData.append('title', title.value);
        formData.append('start_time', start_time.value);
        formData.append('end_time', end_time.value);
        formData.append('location', location.value);
        formData.append('leader', leader.value);
        formData.append('description', description.value);
        
        // formData.append('detail_agenda', JSON.stringify(satker.value));
        satker.value.forEach((item) => {
          formData.append('detail_agenda[]', item);
        });

        //store data with API
        await $fetch(`${config.public.apiBase}/api/agenda`, {

            //method
            method: 'POST',

            //data
            body: formData
        })
        .then(() => {
            //redirect
            router.push({ path: "/satker" });
        })
        .catch((error) => {

            //assign response error data to state "errors"
            errors.value = error.data
        });

        definePageMeta({
            layout: "admin"
        })
    }

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="storePost()">
                          <div class="row">
                            <div class="col-6">
                              <div class="mb-3">
                                  <label class="form-label fw-bold">Title</label>
                                  <input type="text" class="form-control" v-model="title" placeholder="Title Post">
                                  <div v-if="errors.title" class="alert alert-danger mt-2">
                                      <span>{{ errors.title[0] }}</span>
                                  </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="mb-3">
                                  <label class="form-label fw-bold">Pimpinan Rapat</label>
                                  <input type="text" class="form-control" v-model="leader" placeholder="Pimpinan rapat">
                                  <div v-if="errors.leader" class="alert alert-danger mt-2">
                                      <span>{{ errors.leader[0] }}</span>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label fw-bold">Waktu Mulai</label>
                                <input type="datetime-local" class="form-control" v-model="start_time" placeholder="Waktu mulai">
                                <div v-if="errors.start_time" class="alert alert-danger mt-2">
                                    <span>{{ errors.start_time[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label fw-bold">Waktu Selesai</label>
                                <input type="datetime-local" class="form-control" v-model="end_time" placeholder="Waktu selesai">
                                <div v-if="errors.end_time" class="alert alert-danger mt-2">
                                    <span>{{ errors.end_time[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label fw-bold">Lokasi</label>
                                <input type="text" class="form-control" v-model="location" placeholder="Lokasi Rapat">
                                <div v-if="errors.location" class="alert alert-danger mt-2">
                                    <span>{{ errors.location[0] }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label fw-bold">OPD yang diundang</label>
                                <USelect v-model="satker" multiple :items="items" placeholder="Select multiple options" searchable class="form-control w-full" />
                                <div v-if="errors.satker" class="alert alert-danger mt-2">
                                    <span>{{ errors.satker[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="mb-3">
                                <label class="form-label fw-bold">Deskripsi Kegiatan</label>
                                <textarea class="form-control" v-model="description" rows="5" placeholder="Deskripsi"></textarea>
                                <div v-if="errors.description" class="alert alert-danger mt-2">
                                    <span>{{ errors.description[0] }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<template>
    <div class="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
        <div class="app-wrapper">
            <Navbar></Navbar>
            <Aside></Aside>
            <main class="app-main">
                <div class="app-content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h3 class="mb-0">Dashboard</h3>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="app-content">
                    <div class="container-fluid">
                        <slot></slot>
                    </div>
                </div>
            </main>
            <footer class="app-footer">
                <div class="float-end d-none d-sm-inline">Anything you want</div>
                <strong>
                    Copyright &copy; 2014-2025&nbsp;
                    <a href="https://adminlte.io" class="text-decoration-none">AdminLTE.io</a>.
                </strong>
                All rights reserved.
            </footer>
        </div>
    </div>
</template>
import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';
import { Component } from '@angular/core';
import { Productos } from './pages/productos/productos';
/*Rutas de navegación dentro del proyecto*/
export const routes: Routes = [
    {path:'', component: Inicio},
    {path:'sobre-nosotros', component: SobreNosotros},
    {path:'productos', component:Productos},
    {path:'**', redirectTo:''},
];

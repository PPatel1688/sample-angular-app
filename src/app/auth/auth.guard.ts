import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

export const LayoutGuard = async (snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return true;
};

export const LoginGuard = async (snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return true;
}
import React from "react";
import { Link, Head } from '@inertiajs/react';
import Sidebar from "@/Components/partials/Sidebar";
import {HiMenuAlt2} from 'react-icons/hi';

export default function Homepage(props) {
    return(
        <div className="min-h-screen bg-Bgdefault">
            <section  className="flex gap-6">
            <Sidebar />

            <div>
                <h1 className="text-2xl font-Teko text-white">Home</h1>
            </div>
            </section>

        </div>
    )
}
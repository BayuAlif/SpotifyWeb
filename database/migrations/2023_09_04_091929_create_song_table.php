<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('song', function (Blueprint $table) {
            $table->id();
            $table->string('cover');
            $table->string('title');
            $table->string('artist');
            $table->string('album');
            $table->integer('year');
            $table->string('total')->nullable();
            $table->string('audio_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('song');
    }
};

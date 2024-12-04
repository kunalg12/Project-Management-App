<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'kunal',
            'email' => 'kunalgursal2923@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time(),
        ]);

        Project::factory()->count(30)->hasTasks(30)->create();
    }
}

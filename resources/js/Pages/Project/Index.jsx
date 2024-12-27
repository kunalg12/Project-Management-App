import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, errors, projects }) {
    const handleAddProject = () => {
        // Logic to add a new project
        console.log("Add new project");
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
        >

            <Head title="Projects" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul>
                                {projects.map((project, index) => (
                                    <li key={index}>{project.name}</li>
                                ))}
                            </ul>
                            <button 
                                onClick={handleAddProject} 
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Add Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <ProfileHeader />
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <ProfileSection>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </ProfileSection>

                    <ProfileSection>
                        <UpdatePasswordForm className="max-w-xl" />
                    </ProfileSection>

                    <ProfileSection>
                        <DeleteUserForm className="max-w-xl" />
                    </ProfileSection>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
function ProfileHeader() {
    return (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Profile
        </h2>
    );
}
function ProfileSection({ children }) {
    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            {children}
        </div>
    );
}


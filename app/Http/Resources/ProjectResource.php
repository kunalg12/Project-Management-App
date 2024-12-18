<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id"=> $this->id,
            "name"=> $this->name,
            "description"=> $this->description,
            "created_At" => Carbon::parse($this->created_at)->format("Y-m-d"),
            "dueDate" => Carbon::parse($this->dueDate)->format("Y-m-d"),
            "status" => $this->status,
            "imagePath" => $this->ImagePath,
            "createdBy" => $this->createdAt,
            "updatedBy"=> $this->updated_at,
        ];
    }
}

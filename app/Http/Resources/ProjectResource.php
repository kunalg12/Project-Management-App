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
            "created_at" => Carbon::parse($this->created_at)->format("Y-m-d"),
            "due_date" => Carbon::parse($this->due_date)->format("Y-m-d"),
            "status" => $this->status,
            "image_path" => $this->image_path,
            "created_by" => $this->created_by,
            "updated_by"=> $this->updated_by,
        ];
    }
}